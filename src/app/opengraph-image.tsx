import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Mis XV años · Faty · Sábado 19 de diciembre de 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const dir = join(process.cwd(), "src/app/_fonts");
  const [greatVibes, cormorant] = await Promise.all([
    readFile(join(dir, "GreatVibes-Regular.ttf")),
    readFile(join(dir, "CormorantInfant-Medium.ttf")),
  ]);

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
          background: "radial-gradient(ellipse at 50% 40%, #f3e0dc 0%, #fbf6f2 70%)",
          color: "#3f2a2e",
          fontFamily: "Cormorant",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            bottom: 40,
            left: 40,
            right: 40,
            border: "2px solid #b4924a",
            display: "flex",
          }}
        />
        <div style={{ fontSize: 30, letterSpacing: 12, color: "#8a6a2f" }}>MIS XV AÑOS</div>
        <div style={{ fontFamily: "Great Vibes", fontSize: 220, color: "#9e5f68", lineHeight: 1.1 }}>
          Faty
        </div>
        <div style={{ width: 240, height: 2, background: "#b4924a", marginTop: 10 }} />
        <div style={{ fontSize: 36, marginTop: 30 }}>Sábado 19 de diciembre de 2026</div>
        <div style={{ fontSize: 26, marginTop: 10, color: "#6e5458" }}>Huajuapan de León, Oaxaca</div>
      </div>
    ),
    { ...size, fonts: [
        { name: "Cormorant", data: cormorant, style: "normal", weight: 500 },
        { name: "Great Vibes", data: greatVibes, style: "normal", weight: 400 },
      ] },
  );
}
