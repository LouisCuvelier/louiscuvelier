import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <div className={"flex flex-col justify-start"}>
        <Navbar />
        <main className={"w-full max-w-screen-xl mx-auto px-5 py-28"}>
          {children}
        </main>
      </div>
      <Footer className={"mt-auto"} />
    </>
  );
}
