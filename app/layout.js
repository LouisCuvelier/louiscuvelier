import "../styles/global.css";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const PlayfaireDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className={`bg-paper h-screen flex flex-col justify-between min-h-screen text-slate-900 dark:text-slate-50 font-serif`}
        >
          <Navbar />
          <main className={"max-w-screen-xl mx-auto px-5 py-28"}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
