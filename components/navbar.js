import Link from "next/link";

export default function Navbar() {
  return (
    <header className={"w-full max-w-screen-xl mx-auto p-5"}>
      <nav className={"flex flex-row justify-between"}>
        <div>Logo</div>
        <ul className={"flex-row flex font-sans space-x-5 justify-end"}>
          <li>
            <Link href={""} className={"btn btn-secondary"}>
              <span>Projets</span>
            </Link>
          </li>
          <li>
            <Link href={"/blog"} className={"btn btn-secondary"}>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link href={""} className={"btn btn-secondary"}>
              <span>À propos</span>
            </Link>
          </li>
          <li>
            <Link href={""} className={"btn btn-secondary"}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
