function WaveLayer({
  color,
  opacity,
  animClass,
  d,
  bottom,
}: {
  color: string;
  opacity: number;
  animClass: string;
  d: string;
  bottom: number;
}) {
  return (
    <svg
      viewBox="0 0 2880 300"
      preserveAspectRatio="none"
      className={`absolute left-0 h-full w-[200%] ${animClass}`}
      style={{ bottom }}
    >
      <path d={d} fill={color} opacity={opacity} />
    </svg>
  );
}

export function WaveField({ className = "" }: { className?: string }) {
  const far = "M0,140 C240,180 480,100 720,130 C960,160 1200,200 1440,140 L1440,300 L0,300 Z M1440,140 C1680,180 1920,100 2160,130 C2400,160 2640,200 2880,140 L2880,300 L1440,300 Z";
  const mid = "M0,180 C260,120 500,220 780,170 C1040,130 1260,200 1440,170 L1440,300 L0,300 Z M1440,170 C1700,120 1940,220 2220,170 C2480,130 2700,200 2880,170 L2880,300 L1440,300 Z";
  const near = "M0,220 C300,260 600,190 900,220 C1150,245 1300,230 1440,215 L1440,300 L0,300 Z M1440,215 C1740,260 2040,190 2340,220 C2590,245 2740,230 2880,215 L2880,300 L1440,300 Z";

  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-[46%] overflow-hidden ${className}`}>
      <WaveLayer color="var(--ocean)" opacity={0.1} animClass="animate-wave-3" d={far} bottom={0} />
      <WaveLayer color="var(--ocean)" opacity={0.16} animClass="animate-wave-2" d={mid} bottom={0} />
      <WaveLayer color="var(--ocean)" opacity={0.24} animClass="animate-wave-1" d={near} bottom={0} />
    </div>
  );
}
