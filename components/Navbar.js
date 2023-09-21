"use client";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import { usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import { contact } from "/data/contact";
import CopyClipboard from "./CopyClipboard";
import { useEffect } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const paths = [
  { url: "/", title: "Accueil", isPrimary: false },
  { url: "/realisations", title: "Réalisations", isPrimary: false },
  { url: "/prestations", title: "Prestations", isPrimary: false },
  { url: "/blog", title: "Blog", isPrimary: false },
  { url: "/guide-seo", title: "Guide du SEO", isPrimary: false },
  { url: "/a-propos", title: "À propos", isPrimary: false },
  { url: "/contact", title: "Contact", isPrimary: false },
  {
    url: "https://calendly.com/louiscuvelier/intro",
    title: "Commencer votre projet",
    isPrimary: true,
  },
];
const { socials, emails, platforms } = contact;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={"w-full max-w-screen-xl mx-auto"}>
      <nav
        className={
          "max-w-screen-lg mx-auto flex flex-row justify-between pt-5 px-5 items-center"
        }
      >
        {pathname !== "/" ? (
          <Link href={"/"} aria-label={"Accueil"}>
            <Logo className={"h-20"} />
          </Link>
        ) : (
          <span className={"h-20"}></span>
        )}

        <Popover>
          {({ open }) => {
            useEffect(() => {
              document.body.classList.toggle("overflow-hidden", open);
            }, [open]);

            return (
              <>
                <Popover.Button
                  className="btn btn-icon-primary"
                  aria-label={"Ouvrir le menu"}
                >
                  <Bars2Icon />
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
                    className="origin-right bg-slate-50 fixed top-0 inset-x-0 z-50 h-full overflow-y-scroll"
                  >
                    <Transition.Child
                      enter="delay-100 duration-300 ease-out"
                      enterFrom="opacity-0 translate-x-full"
                      enterTo="opacity-100 translate-x-0"
                      leave="duration-300 ease-in"
                      leaveFrom="opacity-100 translate-x-0"
                      leaveTo="opacity-0 translate-x-full"
                      className="origin-right flex flex-col w-full max-w-screen-lg mx-auto py-5"
                    >
                      <div
                        className={
                          "border-hatch pb-14 flex items-center justify-between border-b-[12px] mx-5"
                        }
                      >
                        <div>
                          <Popover.Button
                            as={Link}
                            href={"/"}
                            aria-label={"Accueil"}
                          >
                            <Logo className={"h-20"} />
                          </Popover.Button>
                        </div>
                        <Popover.Button
                          aria-label="Fermer le menu"
                          className="btn btn-icon-primary"
                        >
                          <XMarkIcon />
                        </Popover.Button>
                      </div>

                      <div className={"px-5"}>
                        <nav className={"mt-16 sm:mt-32"}>
                          <ul className="space-y-8 text-slate-800">
                            {paths.map((path) => (
                              <li key={path.url}>
                                <Popover.Button
                                  as={Link}
                                  href={path.url}
                                  className={`title title-3 hover:underline ${
                                    path.isPrimary ? "text-teal-700" : ""
                                  }`}
                                >
                                  {path.title}
                                </Popover.Button>
                              </li>
                            ))}
                          </ul>
                        </nav>

                        <div className={"body body-1 mt-16 sm:mt-32 space-y-4"}>
                          <ul className={"flex space-x-2 ml-1"}>
                            {platforms.map(({ name, url, icon }, index) => (
                              <li key={index}>
                                <Link
                                  href={url}
                                  target={"_blank"}
                                  rel="nofollow noopener noreferrer"
                                  className={"btn btn-icon-primary"}
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
                                  rel="nofollow noopener noreferrer me"
                                  className={"btn btn-icon-primary"}
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
                                  rel={"me"}
                                >
                                  {name}
                                </Link>
                                <CopyClipboard copyText={name} />
                              </li>
                            ))}
                          </ul>
                        </div>
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
