"use client";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import { usePathname } from "next/navigation";
import path from "path";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={"w-full max-w-screen-xl mx-auto p-5"}>
      <nav className={"flex flex-row justify-between items-center"}>
        {pathname !== "/" ? (
          <Link href={"/"}>
            <Logo className={"h-20"} />
          </Link>
        ) : (
          <span className={"h-20"}></span>
        )}

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
            <Link href={"a-propos"} className={"btn btn-secondary"}>
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
