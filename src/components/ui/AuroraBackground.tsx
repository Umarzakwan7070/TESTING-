export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-float-slow absolute -top-1/4 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_var(--accent-1)_0%,_transparent_65%)] opacity-40 blur-3xl" />
      <div className="animate-float-slower absolute top-1/3 -left-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_var(--accent-3)_0%,_transparent_65%)] opacity-30 blur-3xl" />
      <div className="animate-float-slow absolute -bottom-1/4 right-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,_var(--accent-2)_0%,_transparent_65%)] opacity-30 blur-3xl [animation-delay:-6s]" />
    </div>
  );
}
