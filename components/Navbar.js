"use client";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import { usePathname } from "next/navigation";
import MenuBar from "../public/images/menu.svg";
import Close from "../public/images/close.svg";
import { Popover, Transition } from "@headlessui/react";
import { contact } from "/data/contact";
import CopyClipboard from "./CopyClipboard";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { socials, emails, platforms } = contact;

  const paths = [
    { url: "/realisations", title: "Réalisations" },
    // { url: "/blog", title: "Blog" },
    { url: "/a-propos", title: "À propos" },
    { url: "/contact", title: "Contact" },
  ];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <header className={"w-full max-w-screen-xl p-5 mx-auto"}>
      <nav
        className={
          "max-w-screen-lg mx-auto flex flex-row justify-between items-center"
        }
      >
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
          {({ open }) => {
            setIsOpen(open);

            return (
              <>
                <Popover.Button className="btn btn-icon -mr-2">
                  <MenuBar />
                </Popover.Button>
                <Transition>
                  <Transition.Child
                    as={Popover.Overlay}
                    enter="duration-300 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-300 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="fixed inset-0 z-50 bg-slate-800/40 backdrop-blur-sm"
                  ></Transition.Child>
                  <Transition.Child
                    as={Popover.Panel}
                    enter="duration-300 ease-out"
                    enterFrom="translate-x-full rounded-l-[1000px]"
                    enterTo="translate-x-0 rounded-none"
                    leave="duration-[200ms] ease-in"
                    leaveFrom="translate-x-0 rounded-none"
                    leaveTo="translate-x-full rounded-l-[200px]"
                    className="origin-right bg-slate-50 fixed top-0 inset-x-0 z-50 p-5 h-full"
                  >
                    <Transition.Child
                      enter="delay-100 duration-300 ease-out"
                      enterFrom="opacity-0 translate-x-full"
                      enterTo="opacity-100 translate-x-0"
                      leave="duration-300 ease-in"
                      leaveFrom="opacity-100 translate-x-0"
                      leaveTo="opacity-0 translate-x-full"
                      className="origin-right flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className={"flex items-center justify-between"}>
                          <div>
                            <Popover.Button as={Link} href={"/"}>
                              <Logo className={"h-20"} />
                            </Popover.Button>
                          </div>
                          <Popover.Button
                            aria-label="Fermer le menu"
                            className="btn btn-icon -mr-2"
                          >
                            <Close />
                          </Popover.Button>
                        </div>

                        <nav className={"mt-16"}>
                          <ul className="space-y-8 text-slate-800">
                            {paths.map((path) => (
                              <li key={path.url}>
                                <Popover.Button
                                  as={Link}
                                  href={path.url}
                                  className={"title title-2"}
                                >
                                  {path.title}
                                </Popover.Button>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>

                      <div className={"body body-1 space-y-4"}>
                        <ul className={"flex space-x-2 -ml-3"}>
                          {platforms.map(({ name, url, icon }, index) => (
                            <li key={index}>
                              <Link
                                href={url}
                                target={"_blank"}
                                className={"btn btn-icon"}
                              >
                                {icon}
                              </Link>
                            </li>
                          ))}
                          {socials.map(({ name, url, icon }, index) => (
                            <li key={index}>
                              <Link
                                href={url}
                                target={"_blank"}
                                className={"btn btn-icon"}
                              >
                                {icon}
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <ul className={"flex space-x-2"}>
                          {emails.map(({ name, url }, index) => (
                            <li key={index} className={"flex items-center"}>
                              <Link
                                href={url}
                                className={"link link-primary mr-1"}
                              >
                                {name}
                              </Link>
                              <CopyClipboard copyText={name} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Transition.Child>
                  </Transition.Child>
                </Transition>
              </>
            );
          }}
        </Popover>
      </nav>
    </header>
  );
}
