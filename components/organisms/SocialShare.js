"use client";

import XIcon from "../../public/images/twitter.svg";
import LinkedInIcon from "../../public/images/linkedin.svg";
import FacebookIcon from "../../public/images/facebook.svg";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function SocialShare({ url, title }) {
  return (
    <div className={"inline-flex flex-col justify-start p-5"}>
      <div className={"surtitle surtitle-2 mb-3"}>Partager</div>
      <ul className={"flex space-x-2"}>
        {[
          {
            icon: <XIcon />,
            url: `https://twitter.com/intent/tweet?text=${title}&via=LouisCuvelier_&url=${url}`,
          },
          {
            icon: <LinkedInIcon />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          },
          {
            icon: <EnvelopeIcon />,
            url: `mailto:?subject=${title}&body=Bonjour,%0A%0AJe%20pense%20que%20cet%20article%20va%20t'int%C3%A9resser.%0A${url}%0A%0ABonne%20journ%C3%A9e`,
          },
          {
            icon: <FacebookIcon />,
            url: `https://www.facebook.com/sharer.php?u=${url}`,
          },
        ].map((item, index) => (
          <li key={index}>
            <Link
              className={"btn btn-icon-secondary"}
              target={"_blank"}
              rel="nofollow noopener noreferrer"
              href={item.url}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
