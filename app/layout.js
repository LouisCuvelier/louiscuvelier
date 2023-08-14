import "/styles/global.css";
import localFont from "next/font/local";
import CustomToaster from "/components/CustomToaster";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const title = "Louis Cuvelier - Développeur front-end, automatisation et SEO";
const description =
  "Freelance passionné par le code et l'entrepreneuriat, avec une expertise en développement front-end, automatisation et SEO.";

export const metadata = {
  metadataBase: new URL("https://louiscuvelier.com"),
  title: {
    template: "%s - Louis Cuvelier",
    default: title,
  },
  description,
  openGraph: {
    title,
    description,
    url: "https://louiscuvelier.com/",
    images: [],
  },
  twitter: {
    title,
    description,
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
          <div>
            <Navbar />
            <main
              className={"w-full max-w-screen-xl mx-auto px-5 py-20 md:py-28"}
            >
              {children}
            </main>
          </div>
          <Footer className={"mt-auto"} />
          <CustomToaster />
        </div>
      </body>
    </html>
  );
}
