# Base image using Node.js 20-alpine
FROM node:20-alpine AS base

# Install necessary dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat git

# Set up pnpm environment and install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g corepack@latest
RUN corepack enable

# Match the pnpm version to lockfile (adjust the version below if needed)
RUN corepack prepare pnpm@7.30.0 --activate

# Set working directory
WORKDIR /app

# Copy package.json and lockfile to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS builder

# Set up pnpm in the builder stage
RUN corepack enable
RUN corepack prepare pnpm@7.30.0 --activate

# Set working directory for builder
WORKDIR /app

# Copy dependencies and source code from the deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the project (e.g., for Next.js or other build systems)
RUN pnpm build

### Production image
FROM base AS runner

# Set NODE_ENV to production
ENV NODE_ENV production

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set up user to run secure Next.js application
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the output of the build to the production image
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Use non-root user for app runtime
USER nextjs

# Expose necessary Port
EXPOSE 3000

# Set the default host and port
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Add a healthcheck for container orchestration
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q", "http://localhost:3000/health" ]

# Run the application with Node.js
CMD ["node", "server.js"]