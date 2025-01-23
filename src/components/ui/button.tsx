import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ImSpinner2 } from 'react-icons/im';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                'outline-primary': 'border border-primary-200 bg-background shadow-sm hover:bg-accent text-primary',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-sm px-3 text-xs',
                lg: 'h-10 rounded-sm px-6 text-base',
                xl: 'h-12 rounded-sm px-6 text-base',
                'sm-responsive': 'h-6 lg:h-8 rounded-sm px-1 lg:px-3 text-xs',
                'lg-responsive': 'h-8 lg:h-10 rounded-sm px-4 lg:px-6 text-base',
                'xl-responsive': 'h-10 lg:h-12 rounded-sm px-4 lg:px-6 text-base',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & { isPending?: boolean }>(
    ({ className, variant, size, isPending = false, children, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
                disabled={isPending}
            >
                {isPending && <ImSpinner2 className="animate-spin" />} {children}
            </Comp>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
