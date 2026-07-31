import { ReactNode } from "react";

export function ListRow({
  leading,
  title,
  desc,
  trailing,
  last = false,
}: {
  leading?: ReactNode;
  title: string;
  desc?: string;
  trailing?: ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3.5 px-4 py-3.5 ${last ? "" : "border-b border-line"}`}>
      {leading}
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold text-ink">{title}</p>
        {desc && <p className="mt-0.5 text-[13px] leading-snug text-ink-dim">{desc}</p>}
      </div>
      {trailing}
    </div>
  );
}
