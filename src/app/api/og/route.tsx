import { ImageResponse } from "next/og";
import { cn } from "@/utils/classNames.utils";

// Image metadata
const size = {
  width: 1200,
  height: 630,
};

export async function GET() {
  const font = fetch(
    new URL(
      "/assets/fonts/QanelasSoft-ExtraBold.woff",
      process.env.NEXT_PUBLIC_BASE_URL,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw={cn("flex bg-background text-foreground-heading h-full w-full p-24")}
        style={{
          backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/background.png")`,
          backgroundSize: "100px 100px",
          backgroundRepeat: "repeat",
        }}
      >
        <div tw={"flex h-full w-full justify-center items-center flex"}>
          <div tw={"flex relative mr-12"}>
            <img
              tw={"w-72"}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/profile.svg`}
              alt={"Logo"}
            />
          </div>
          <div tw={"flex flex-col justify-center text-slate-900"}>
            <h1 tw={cn("flex font-bold tracking-tight text-8xl mb-2")}>
              Louis Cuvelier.
            </h1>
            <h2 tw={cn("flex font-bold text-4xl tracking-tight mt-0")}>
              Co-Founder & Web Engineer at Subrequest.
            </h2>
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
          weight: 900,
        },
      ],
      headers: {
        "X-Robots-Tag": "noindex",
      },
    },
  );
}
