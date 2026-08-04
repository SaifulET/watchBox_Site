import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline" | "success";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase";

  const variants = {
    primary: "bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900",
    secondary: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200",
    gold: "bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/50",
    outline: "border border-border text-muted-foreground",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
