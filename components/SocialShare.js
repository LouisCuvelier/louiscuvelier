"use client";

import EmailIcon from "../public/images/email.svg";
import TwitterIcon from "../public/images/twitter.svg";
import LinkedInIcon from "../public/images/linkedin.svg";
import FacebookIcon from "../public/images/facebook.svg";
import Link from "next/link";
import CardEffect from "./CardEffect";

export default function SocialShare({ url, title }) {
  return (
    <CardEffect className={"inline-flex flex-col justify-start lg:w-full p-5"}>
      <div className={"surtitle surtitle-2 mb-2 text-center lg:text-left"}>
        Partager
      </div>
      <ul className={"flex space-x-2"}>
        {[
          {
            icon: <TwitterIcon />,
            url: `https://twitter.com/intent/tweet?text=${title}&via=LouisCuvelier_&url=${url}`,
          },
          {
            icon: <LinkedInIcon />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          },
          {
            icon: <EmailIcon />,
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
    </CardEffect>
  );
}
