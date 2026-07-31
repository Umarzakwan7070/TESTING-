export function AuroraField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-float-slow absolute -top-1/4 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--accent)_0%,_transparent_65%)] opacity-[0.12] blur-3xl dark:opacity-[0.22]" />
    </div>
  );
}
