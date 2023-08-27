"use client";
import { useEffect } from "react";
import cardEffect from "../lib/card-effect";
import Link from "next/link";
import ArrowUpRight from "../public/images/arrow-up-right.svg";

export default function PrestationCard({
  services,
  technologies,
  title,
  subtitle,
}) {
  useEffect(() => {
    cardEffect(".cards");
  }, []);

  return (
    <article
      className={
        "cards border-hatch @container w-full grid grid-cols-2 max-w-screen-lg mx-auto gap-12 border-[12px] rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out p-14"
      }
    >
      <div className={"col-span-2"}>
        <h2 className={"title title-2 mb-2"}>{title}</h2>
        <p className={"title title-4"}>{subtitle}</p>
      </div>

      <div className={"col-span-2 @xl:col-span-1"}>
        <ul className={"list list-ul body body-1"}>
          {services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={"col-span-2 @xl:col-span-1"}>
        {technologies && (
          <>
            <h3 className={"title title-4 mb-3"}>Technologies</h3>
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
          href={
            '"https://docs.google.com/forms/d/e/1FAIpQLSfuNoB281AfU3hIBjbIxNM4f0-0GRf5FAb9FV8cxISjNvMyGw/viewform?usp=pp_url"'
          }
          className={"btn btn-tertiary"}
          rel="nofollow noopener noreferrer"
          target={"_blank"}
        >
          <span>Commencer votre projet</span>
          <ArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
