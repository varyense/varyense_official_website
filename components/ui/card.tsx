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
        "rounded-3xl border border-slate-900/95 bg-slate-950/95 px-6 py-6 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.9)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_32px_104px_rgba(15,23,42,1)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

