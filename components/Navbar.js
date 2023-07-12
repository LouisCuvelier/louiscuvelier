import Link from "next/link";

export default function Navbar() {
  return (
    <header className={"w-full max-w-screen-xl mx-auto p-5"}>
      <nav className={"flex flex-row justify-between"}>
        <Link href={"/"}>Logo</Link>
        <ul className={"flex-row flex font-sans space-x-5 justify-end"}>
          <li>
            <Link href={"/projets"} className={"btn btn-secondary"}>
              Projets
            </Link>
          </li>
          <li>
            <Link href={"/blog"} className={"btn btn-secondary"}>
              Blog
            </Link>
          </li>
          <li>
            <Link href={""} className={"btn btn-secondary"}>
              À propos
            </Link>
          </li>
          <li>
            <Link href={""} className={"btn btn-secondary"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
