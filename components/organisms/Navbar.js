"use client";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import { usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import { contact } from "/data/contact";
import CopyClipboard from "../atoms/CopyClipboard";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const paths = [
  { url: "/", title: "Accueil", isPrimary: false },
  { url: "/realisations", title: "Réalisations", isPrimary: false },
  { url: "/prestations", title: "Prestations", isPrimary: false },
  { url: "/blog", title: "Blog", isPrimary: false },
  { url: "/guide-seo", title: "Guide du SEO", isPrimary: false },
  { url: "/a-propos", title: "À propos", isPrimary: false },
  { url: "/contact", title: "Contact", isPrimary: false },
  {
    url: "https://subrequest.com",
    title: "Subrequest – l'agence de développement web",
    isPrimary: true,
  },
];
const { socials, emails, platforms } = contact;

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);
  const pathname = usePathname();

  return (
    <header
      className={`sticky z-50 top-0 px-5 transition duration-300 ease-in-out ${
        isScrolling ? "bg-slate-50" : ""
      }`}
    >
      <hr
        className={`border-hatch border-t-0 border-b-[10px] backdrop-blur-lg absolute -bottom-2 -mx-5 w-full duration-300 transition ease-in-out ${
          isScrolling ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        className={
          "max-w-screen-lg mx-auto flex flex-row justify-between items-center py-5"
        }
      >
        {pathname !== "/" ? (
          <Link
            href={"/"}
            aria-label={"Accueil"}
            className={"flex items-center"}
          >
            <Logo className={"h-16"} />
            <span
              className={`title title-4 ml-5 transition duration-300 ease-in-out ${
                isScrolling ? "opacity-100" : "opacity-0"
              }`}
            >
              Louis Cuvelier
            </span>
          </Link>
        ) : (
          <Link
            href={"/"}
            aria-label={"Accueil"}
            className={`flex items-center transition duration-300 ease-in-out ${
              isScrolling ? "opacity-100" : "opacity-0"
            }`}
          >
            <Logo className={`h-16`} />
            <span className={`title title-4 ml-5`}>Louis Cuvelier</span>
          </Link>
        )}

        <Popover>
          {({ open }) => {
            if (typeof document !== "undefined") {
              document.body.classList.toggle("overflow-hidden", open);
            }

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
                    className="origin-right bg-slate-50 fixed top-0 inset-x-0 z-50 h-full p-5 overflow-y-scroll"
                  >
                    <Transition.Child
                      enter="delay-100 duration-300 ease-out"
                      enterFrom="opacity-0 translate-x-full"
                      enterTo="opacity-100 translate-x-0"
                      leave="duration-300 ease-in"
                      leaveFrom="opacity-100 translate-x-0"
                      leaveTo="opacity-0 translate-x-full"
                      className="origin-right flex flex-col w-full max-w-screen-lg mx-auto"
                    >
                      <div
                        className={
                          "border-hatch pb-14 flex items-center justify-between border-b-[10px]"
                        }
                      >
                        <div>
                          <Popover.Button
                            as={Link}
                            href={"/"}
                            aria-label={"Accueil"}
                            className={"flex items-center"}
                          >
                            <Logo className={"h-16"} />
                            <span className={`title title-4 ml-5 `}>
                              Louis Cuvelier
                            </span>
                          </Popover.Button>
                        </div>
                        <Popover.Button
                          aria-label="Fermer le menu"
                          className="btn btn-icon-primary"
                        >
                          <XMarkIcon />
                        </Popover.Button>
                      </div>

                      <div className={""}>
                        <nav className={"mt-16 sm:mt-32"}>
                          <ul className="space-y-8 text-slate-800">
                            {paths.map((path) => (
                              <li key={path.url}>
                                <Popover.Button
                                  as={Link}
                                  href={path.url}
                                  {...(path?.rel && { rel: path.rel })}
                                  className={`title title-3 action ${
                                    path.isPrimary
                                      ? "action-primary"
                                      : "action-secondary"
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
