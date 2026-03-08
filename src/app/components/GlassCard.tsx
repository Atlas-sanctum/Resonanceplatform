import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl
        ${hover ? "transition-all duration-300 hover:bg-white/10 hover:border-white/20" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
