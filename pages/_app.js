import "../styles/global.css";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

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

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
