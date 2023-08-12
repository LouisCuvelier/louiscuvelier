import "/styles/global.css";
import localFont from "next/font/local";
import CustomToaster from "/components/CustomToaster";

export const metadata = {
  title: "Louis Cuvelier - Développeur front-end, automatisation et SEO",
  description:
    "Freelance passionné par le code et l'entrepreneuriat, avec une expertise en développement front-end, automatisation et SEO.",
  openGraph: {
    title: "Louis Cuvelier - Développeur front-end, automatisation et SEO",
    description:
      "Freelance passionné par le code et l'entrepreneuriat, avec une expertise en développement front-end, automatisation et SEO.",
    url: "https://louiscuvelier.com/",
    siteName: "Louis Cuvelier",
    images: [],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis Cuvelier - Développeur front-end, automatisation et SEO",
    description:
      "Freelance passionné par le code et l'entrepreneuriat, avec une expertise en développement front-end, automatisation et SEO.",
    creator: "@LouisCuvelier_",
    images: [""],
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
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={"font-body antialiased bg-slate-50 text-slate-950"}>
        <div className={"bg-paper-animated"}></div>
        <div
          className={"relative z-10 flex flex-col justify-between min-h-screen"}
        >
          {children}
          <CustomToaster />
        </div>
      </body>
    </html>
  );
}
