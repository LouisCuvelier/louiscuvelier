import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

const url = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const title = "Louis Cuvelier - Co-Founder & Web Engineer at Subrequest";
const description = "Louis Cuvelier, Co-Founder & Web Engineer at Subrequest.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ""),
  title: {
    template: "%s - Louis Cuvelier",
    default: title,
  },
  alternates: {
    canonical: url,
  },
  authors: [{ name: "Louis Cuvelier" }],
  description,
  openGraph: {
    type: "website",
    title: {
      template: "%s - Louis Cuvelier",
      default: title,
    },
    description,
    url,
    images: [`/api/og`],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s - Louis Cuvelier",
      default: title,
    },
    description,
    images: [`/api/og`],
  },
};

const QanelasSoft = localFont({
  src: [
    {
      path: "../../public/assets/fonts/QanelasSoft-ExtraBold.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/QanelasSoft-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

const RocGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/roc-grotesk-400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/roc-grotesk-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/roc-grotesk-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/roc-grotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-copy",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${QanelasSoft.variable} ${RocGrotesk.variable} bg-background antialiased font-body relative isolate`}
      >
        <div className={"bg-paper"} />
        <div className={"z-10 relative"}>{children}</div>
      </body>
    </html>
  );
}
