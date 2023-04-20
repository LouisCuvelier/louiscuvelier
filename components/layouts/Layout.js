import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ style, children }) {
  return (
    <div
      className={`${style} bg-paper min-h-screen text-slate-900 dark:text-slate-50 font-serif`}
    >
      <Navbar />
      <main className={"max-w-screen-xl mx-auto px-5 py-28"}>{children}</main>
      <Footer />
    </div>
  );
}
