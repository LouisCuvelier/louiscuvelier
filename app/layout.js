import "../styles/global.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomToaster from "../components/CustomToaster";

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
          <Navbar />
          <main className={"w-full max-w-screen-xl mx-auto px-5 py-28"}>
            {children}
          </main>
          <Footer />
          <CustomToaster />
        </div>
      </body>
    </html>
  );
}
