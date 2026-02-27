import * as Slot from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-slate-950 hover:bg-accent/90 shadow-[0_0_20px_rgba(148,163,184,0.4)] hover:shadow-[0_0_28px_rgba(148,163,184,0.7)]",
  secondary:
    "bg-muted text-foreground hover:bg-muted/90 border border-border/60",
  ghost: "bg-transparent text-muted-foreground hover:bg-muted/40",
  outline:
    "border border-border text-foreground hover:bg-muted/60 hover:border-accent/80",
};

export function Button({
  variant = "primary",
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(baseClasses, variantClasses[variant], className)}
      {...(asChild ? {} : props)}
    >
      {children}
    </Comp>
  );
}

