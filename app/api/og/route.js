import { ImageResponse } from "next/server";
import { baseUrl } from "../../../lib/baseUrl";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

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

  const hasSurtitle = searchParams.has("surtitle");
  const surtitle =
    hasSurtitle && searchParams.get("surtitle")?.trim().length > 0
      ? searchParams.get("surtitle")?.trim()
      : "";

  const hasDate = searchParams.has("date");
  const date =
    hasDate && searchParams.get("date")?.trim().length > 0
      ? parseISO(searchParams.get("date")?.trim())
      : "";

  const hasReadingTime = searchParams.has("readingTime");
  const readingTime =
    hasReadingTime && searchParams.get("readingTime")?.trim().length > 0
      ? searchParams.get("readingTime")?.trim()
      : "";

  return new ImageResponse(
    (
      <div
        tw={"flex bg-slate-50 text-slate-900 h-full w-full p-24"}
        style={{
          backgroundImage: `url("${baseUrl}/images/background.png")`,
          backgroundSize: "100px 100px",
          backgroundRepeat: "repeat",
        }}
      >
        <div tw={"flex flex-col h-full w-full justify-center"}>
          <div tw={"flex flex-col justify-start"}>
            {surtitle && (
              <h2
                tw={"text-lg mt-0 mb-1 uppercase"}
                style={{ letterSpacing: "0.20rem" }}
              >
                {surtitle}
              </h2>
            )}
            <h1 tw={"text-7xl my-0"} style={{ textWrap: "balance" }}>
              {title}
            </h1>
          </div>
          <div
            tw={"h-2 w-full flex my-6 bg-slate-500 rounded-full"}
            // TODO : Apply when repeating-linear-gradient available
            // style={{
            //   backgroundImage:
            //     "repeating-linear-gradient(-45deg, transparent, transparent 3px, #64748b 4px)",
            // }}
          />
          <div tw={"flex items-center w-full my-0"}>
            <img
              tw={"w-14"}
              src={`${baseUrl}/images/profile.svg`}
              alt={"Logo"}
            />
            <div tw={"flex flex-col ml-10 my-0"}>
              <div tw={"text-4xl my-0"}>Louis Cuvelier</div>
              {(date || readingTime) && (
                <div tw={"text-xl text-slate-500 flex my-0"}>
                  {date && (
                    <span>
                      Mis à jour le{" "}
                      {format(date, "d MMMM yyyy", { locale: fr })}
                    </span>
                  )}
                  {date && readingTime && <span tw={"px-2"}>–</span>}
                  {readingTime && <span>{readingTime} min de lecture</span>}
                </div>
              )}
            </div>
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
        "X-Robots-Tag": "noindex",
      },
    }
  );
}
