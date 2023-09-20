"use client";
import Link from "next/link";
import CardEffect from "./CardEffect";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function PrestationCard({
  services,
  technologies,
  title,
  subtitle,
}) {
  return (
    <CardEffect
      as={"article"}
      className={"grid grid-cols-2 gap-12 p-5 sm:p-14"}
    >
      <div className={"col-span-2"}>
        <h2 className={"title title-3 hyphens-auto mb-2"}>{title}</h2>
        <p className={"title title-5"}>{subtitle}</p>
      </div>

      <div className={"col-span-2 md:col-span-1"}>
        <ul className={"list list-ul body body-1"}>
          {services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={"col-span-2 md:col-span-1"}>
        {technologies && (
          <>
            <h3 className={"title title-5 mb-3"}>Technologies</h3>
            <ul className={"gap-2 flex flex-row flex-wrap mt-1"}>
              {technologies.map((item, index) => (
                <li
                  key={index}
                  className={
                    "surtitle surtitle-2 bg-hatch-secondary rounded pl-2 pr-1"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className={"col-span-2"}>
        <Link
          href={"https://calendly.com/louiscuvelier/intro"}
          className={"btn btn-tertiary"}
          rel="nofollow noopener noreferrer"
          target={"_blank"}
        >
          <span>Commencer votre projet</span>
          <ArrowUpRightIcon />
        </Link>
      </div>
    </CardEffect>
  );
}
