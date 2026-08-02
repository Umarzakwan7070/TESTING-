function WaveLayer({
  fill,
  animClass,
  d,
  bottom,
}: {
  fill: string;
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
      <path d={d} fill={fill} />
    </svg>
  );
}

export function WaveField({ className = "" }: { className?: string }) {
  const far = "M0,140 C240,180 480,100 720,130 C960,160 1200,200 1440,140 L1440,300 L0,300 Z M1440,140 C1680,180 1920,100 2160,130 C2400,160 2640,200 2880,140 L2880,300 L1440,300 Z";
  const mid = "M0,180 C260,120 500,220 780,170 C1040,130 1260,200 1440,170 L1440,300 L0,300 Z M1440,170 C1700,120 1940,220 2220,170 C2480,130 2700,200 2880,170 L2880,300 L1440,300 Z";
  const near = "M0,220 C300,260 600,190 900,220 C1150,245 1300,230 1440,215 L1440,300 L0,300 Z M1440,215 C1740,260 2040,190 2340,220 C2590,245 2740,230 2880,215 L2880,300 L1440,300 Z";

  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-[46%] overflow-hidden ${className}`}>
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="waveFarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfe0da" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--ocean)" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="waveMidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8cc9be" stopOpacity="0.55" />
            <stop offset="45%" stopColor="var(--ocean)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--ocean-deep)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveNearGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="10%" stopColor="#cde8e1" stopOpacity="0.55" />
            <stop offset="40%" stopColor="var(--ocean)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--ocean-deep)" stopOpacity="0.34" />
          </linearGradient>
        </defs>
      </svg>
      <WaveLayer fill="url(#waveFarGrad)" animClass="animate-wave-3" d={far} bottom={0} />
      <WaveLayer fill="url(#waveMidGrad)" animClass="animate-wave-2" d={mid} bottom={0} />
      <WaveLayer fill="url(#waveNearGrad)" animClass="animate-wave-1" d={near} bottom={0} />
    </div>
  );
}
