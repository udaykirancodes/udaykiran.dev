import { USER } from "@/data"
import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || USER.name
    const description = searchParams.get("description") || "Hi, I'm Uday"

    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "628px",
            width: "1200px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            gap: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "64px", // 16 * 4px
              height: "1px",
              width: "100%",
              backgroundColor: "#a3a3a3", // neutral-400
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "64px",
              height: "1px",
              width: "100%",
              backgroundColor: "#a3a3a3",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "64px",
              height: "100%",
              width: "1px",
              backgroundColor: "#a3a3a3",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "64px",
              height: "100%",
              width: "1px",
              backgroundColor: "#a3a3a3",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              padding: "64px",
              rowGap: "8px",
            }}
          >
            <div
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: title.length > 20 ? "64px" : "80px",
                lineHeight: 1.1,
                fontWeight: "bold",
                letterSpacing: "-0.02em",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "40px",
                lineHeight: 1.5,
                color: "#a8a29e",
                maxHeight: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {description}
            </div>
            <div
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: "#a8a29e",
                maxHeight: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              ~ {USER.name}
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 628 }
    )
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 })
  }
}
