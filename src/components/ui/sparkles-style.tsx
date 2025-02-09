"use client";

import { cn } from "@/lib/utils";

interface SparklesStyleProps {
  className?: string;
}

export function SparklesStyle({ className }: SparklesStyleProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-purple-500/10 before:to-transparent",
        "before:animate-sparkle-slow",
        "after:absolute after:inset-0",
        "after:bg-gradient-to-r after:from-transparent after:via-cyan-500/10 after:to-transparent",
        "after:animate-sparkle-fast",
        className
      )}
    />
  );
} 