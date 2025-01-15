import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/font";

export const metadata: Metadata = {
  title: "JobCompass",
  description: "Navigate your career, find your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
