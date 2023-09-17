import "/styles/global.css";
import localFont from "next/font/local";
import CustomToaster from "../components/CustomToaster";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { baseUrl } from "../lib/baseUrl";
import { Analytics } from "@vercel/analytics/react";

const title =
  "Louis Cuvelier - Création de site, SEO et automatisation des processus";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s - Louis Cuvelier",
    default: title,
  },
  openGraph: {
    title: {
      template: "%s - Louis Cuvelier",
      default: title,
    },
  },
  twitter: {
    title: {
      template: "%s - Louis Cuvelier",
      default: title,
    },
    description: {},
  },
};

const QanelasSoft = localFont({
  src: [
    {
      path: "../public/fonts/QanelasSoft-ExtraBold.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/QanelasSoft-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-qanelas-soft",
});

const RocGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/roc-grotesk-400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roc-grotesk-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roc-grotesk-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/roc-grotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-roc-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${QanelasSoft.variable} ${RocGrotesk.variable} font-body antialiased bg-slate-50 text-slate-950`}
      >
        <div className={"bg-paper-animated"}></div>
        <div
          className={"relative z-10 flex flex-col justify-between min-h-screen"}
        >
          <div>
            <Navbar />
            <main
              className={"md:py-26 w-full max-w-screen-xl mx-auto px-5 py-20"}
            >
              {children}
            </main>
          </div>
          <Footer className={"mt-auto"} />
          <CustomToaster />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
