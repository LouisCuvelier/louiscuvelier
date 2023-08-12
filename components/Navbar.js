"use client";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import { usePathname } from "next/navigation";
import MenuBar from "../public/images/menu.svg";
import Close from "../public/images/close.svg";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const paths = [
    { url: "/realisations", title: "Réalisations" },
    { url: "/blog", title: "Blog" },
    { url: "/a-propos", title: "À propos" },
    { url: "/contact", title: "Contact" },
  ];

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

        <ul
          className={"hidden flex-row md:flex font-sans space-x-5 justify-end"}
        >
          {paths.map((path) => (
            <li key={path.url}>
              <Link href={path.url} className={"btn btn-secondary"}>
                {path.title}
              </Link>
            </li>
          ))}
        </ul>

        <Popover className={"md:hidden"}>
          <Popover.Button className="btn btn-icon">
            <MenuBar />
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 z-50 bg-slate-800/40 backdrop-blur-sm" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="bg-slate-50 fixed inset-x-4 top-4 z-50 origin-top rounded-md p-8 ring-1 ring-zinc-900/5"
              >
                <div className="flex justify-between items-start">
                  <Popover.Button
                    aria-label="Fermer le menu"
                    className="btn btn-icon order-2 -mt-3 -mr-3"
                  >
                    <Close />
                  </Popover.Button>
                  <nav className="order-1">
                    <ul className="text-slate-800 space-y-3">
                      <li>
                        <Popover.Button
                          as={Link}
                          href={"/"}
                          className={"btn btn-secondary"}
                        >
                          Accueil
                        </Popover.Button>
                      </li>
                      {paths.map((path) => (
                        <li key={path.url}>
                          <Popover.Button
                            as={Link}
                            href={path.url}
                            className={"btn btn-secondary"}
                          >
                            {path.title}
                          </Popover.Button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </Popover>
      </nav>
    </header>
  );
}
