import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-neutral-800 dark:hover:bg-neutral-200 border border-primary",
    secondary:
      "bg-muted text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-transparent",
    outline:
      "bg-transparent text-foreground border border-border hover:bg-muted hover:border-foreground/30",
    ghost:
      "bg-transparent text-foreground hover:bg-muted hover:text-accent",
    gold:
      "bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:bg-amber-600 border border-amber-600",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs tracking-wider uppercase",
    md: "px-6 py-2.5 text-sm tracking-wide",
    lg: "px-8 py-3 text-base tracking-wide font-semibold",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
