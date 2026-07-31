import { ReactNode } from "react";

export function MarkedText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block text-coral ${className}`}>
      {children}
    </span>
  );
}
