import { ImageResponse } from "next/og";

export const alt = "SurfingLeads — Landing Pages & Websites for Entrepreneurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #1b7a72 0%, #145c56 55%, #0b322f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -1 }}>SurfingLeads</div>
        <div
          style={{
            fontSize: 30,
            marginTop: 28,
            opacity: 0.85,
            maxWidth: 820,
            textAlign: "center",
          }}
        >
          Landing pages & websites built to turn visitors into enquiries
        </div>
      </div>
    ),
    { ...size }
  );
}
