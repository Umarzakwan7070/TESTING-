export function BlueprintField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black_35%,transparent_85%)]" />
      <div className="animate-drift absolute left-1/2 top-0 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,_var(--brass)_0%,_transparent_62%)] opacity-[0.14] blur-3xl" />

      <span className="absolute left-6 top-6 h-3 w-3 border-l border-t border-line md:left-10 md:top-10" />
      <span className="absolute right-6 top-6 h-3 w-3 border-r border-t border-line md:right-10 md:top-10" />
      <span className="absolute bottom-6 left-6 h-3 w-3 border-b border-l border-line md:bottom-10 md:left-10" />
      <span className="absolute bottom-6 right-6 h-3 w-3 border-b border-r border-line md:bottom-10 md:right-10" />
    </div>
  );
}
