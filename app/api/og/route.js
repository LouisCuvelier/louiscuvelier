import { ImageResponse } from "next/server";
import { baseUrl } from "../../../lib/baseUrl";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Louis Cuvelier";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export async function GET(request) {
  const font = fetch(
    new URL("public/fonts/QanelasSoft-ExtraBold.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const title =
    hasTitle && searchParams.get("title")?.trim().length > 0
      ? searchParams.get("title")?.trim()
      : "Création de site, SEO et automatisation des processus";

  return new ImageResponse(
    (
      <div
        tw={"flex bg-slate-50 text-slate-900 h-full w-full p-12"}
        style={{
          backgroundImage: `url("${baseUrl}/images/background.png")`,
          backgroundSize: "100px 100px",
          backgroundRepeat: "repeat",
        }}
      >
        <div tw={"flex h-full w-full justify-between"}>
          <div tw={"flex items-center w-4/12 pr-8 mr-8"}>
            <img
              tw={"w-full"}
              src={`${baseUrl}/images/profile.svg`}
              alt={"Logo"}
            />
          </div>
          <div tw={"flex flex-col w-8/12 h-full justify-center"}>
            <h2 tw={"text-3xl mt-0 mb-0 uppercase tracking-widest"}>
              Louis Cuvelier
            </h2>
            <h1 tw={"text-8xl mt-0"} style={{ textWrap: "balance" }}>
              {title}
            </h1>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Qanelas Soft",
          data: await font,
          style: "normal",
          weight: "900",
        },
      ],
      headers: {
        "X-Robots-Tag": "noindex"
      }
    }
  );
}
