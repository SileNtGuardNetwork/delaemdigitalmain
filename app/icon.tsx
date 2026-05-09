import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #05070a, #11151b)",
          color: "#e7c6af",
          fontSize: 25,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
          letterSpacing: "-0.08em",
          border: "1px solid rgba(231,198,175,.42)"
        }}
      >
        DD
      </div>
    ),
    size
  );
}
