import { LucideIcon } from "lucide-react";

const COLORS = {
  ocean: "bg-ocean",
  deep: "bg-ocean-deep",
  coral: "bg-coral",
  sun: "bg-sun",
} as const;

export function IconTile({
  icon: Icon,
  color = "ocean",
  size = "md",
}: {
  icon: LucideIcon;
  color?: keyof typeof COLORS;
  size?: "sm" | "md";
}) {
  const dims = size === "sm" ? "h-8 w-8 rounded-[10px]" : "h-11 w-11 rounded-[14px]";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const iconColor = color === "sun" ? "text-ink" : "text-white";

  return (
    <div className={`flex shrink-0 items-center justify-center ${dims} ${COLORS[color]}`}>
      <Icon className={`${iconSize} ${iconColor}`} strokeWidth={2} />
    </div>
  );
}
