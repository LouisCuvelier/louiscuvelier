import { contact } from "../data/contact";
import Link from "next/link";
import CopyClipboard from "./CopyClipboard";

export default function Footer({ className }) {
  const { socials, emails } = contact;

  return (
    <footer
      className={`body body-3 max-w-screen-xl p-5 w-full mx-auto ${className}`}
    >
      <div
        className={
          "max-w-screen-lg mx-auto flex justify-between items-center flex-wrap"
        }
      >
        <div>Copyright © {new Date().getFullYear()} Louis Cuvelier</div>
        <div>
          <ul className={"space-x-3 flex items-center"}>
            {emails.map(({ name, url }, index) => (
              <li key={index} className={"flex items-center"}>
                <Link href={url} className={"link link-primary mr-1"}>
                  {name}
                </Link>
                <CopyClipboard copyText={name} />
              </li>
            ))}
            {socials.map(({ name, url, icon }, index) => (
              <li key={index}>
                <Link
                  href={url}
                  target={"_blank"}
                  rel="nofollow noopener noreferrer me"
                  className={"btn btn-icon-secondary"}
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
