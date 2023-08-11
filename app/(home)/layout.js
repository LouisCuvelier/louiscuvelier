import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className={"w-full max-w-screen-xl mx-auto px-5 py-20 md:py-28"}>
        {children}
      </main>
      <Footer className={"mt-auto"} />
    </>
  );
}
