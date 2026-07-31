export function WaveDivider({
  fill = "var(--foam)",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none relative h-14 w-full overflow-hidden sm:h-20 ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,64 C240,120 480,8 720,40 C960,72 1200,112 1440,56 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
