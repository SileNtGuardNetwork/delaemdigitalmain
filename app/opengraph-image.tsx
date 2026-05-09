import { ImageResponse } from "next/og";

export const alt = "Делаем Диджитал — ClientFlow System";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #05070a 0%, #0b0d11 58%, #07090c 100%)",
          color: "#f4f1ea",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 74% 34%, rgba(231,198,175,.18), transparent 310px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "auto, 92px 100%"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 96,
            top: 78,
            bottom: 78,
            width: 1,
            background: "linear-gradient(180deg, transparent, rgba(231,198,175,.55), transparent)"
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "74px 86px",
            maxWidth: 880
          }}
        >
          <div
            style={{
              color: "#e7c6af",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase"
            }}
          >
            Делаем Диджитал
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 76,
              lineHeight: 0.96,
              fontWeight: 800,
              letterSpacing: "-0.055em"
            }}
          >
            ClientFlow System
          </div>
          <div
            style={{
              marginTop: 28,
              color: "#c8c3b8",
              fontSize: 36,
              lineHeight: 1.18,
              maxWidth: 760
            }}
          >
            Управляемая система привлечения клиентов
          </div>
          <div
            style={{
              marginTop: 54,
              width: 520,
              height: 1,
              background: "linear-gradient(90deg, #c7845c, transparent)"
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
