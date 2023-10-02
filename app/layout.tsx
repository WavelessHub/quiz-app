import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

import { ReactNode } from "react";

import ToastProvider from "@/providers/ToastProvider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex h-screen bg-[#323232] items-center justify-center",
          font.className
        )}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
