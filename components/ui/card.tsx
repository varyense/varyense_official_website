import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border/70 bg-card/80 px-6 py-6 backdrop-blur-sm shadow-[0_24px_80px_rgba(15,23,42,0.6)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

