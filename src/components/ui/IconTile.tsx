import { LucideIcon } from "lucide-react";

const COLORS = {
  blue: "bg-tile-blue",
  green: "bg-tile-green",
  orange: "bg-tile-orange",
  purple: "bg-tile-purple",
  pink: "bg-tile-pink",
  teal: "bg-tile-teal",
} as const;

export function IconTile({
  icon: Icon,
  color = "blue",
  size = "md",
}: {
  icon: LucideIcon;
  color?: keyof typeof COLORS;
  size?: "sm" | "md";
}) {
  const dims = size === "sm" ? "h-8 w-8 rounded-[9px]" : "h-11 w-11 rounded-[12px]";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={`flex shrink-0 items-center justify-center ${dims} ${COLORS[color]}`}>
      <Icon className={`${iconSize} text-white`} strokeWidth={2} />
    </div>
  );
}
