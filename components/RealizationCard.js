"use client";
import Clock from "../public/images/clock.svg";
import Link from "next/link";
import ArrowUpRight from "../public/images/arrow-up-right.svg";
import { useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import cardEffect from "../lib/card-effect";

export default function RealizationCard({
  index,
  client,
  description,
  website,
  categories,
  work,
  duration,
  technologies,
  cover,
}) {
  useEffect(() => {
    cardEffect(".cards");
  }, []);

  return (
    <article
      key={index}
      className={
        "cards border-hatch @container border-[12px] rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out"
      }
    >
      <div className={"w-full relative"}>
        <ExportedImage
          placeholder="blur"
          src={cover}
          className={"rounded-t"}
          width={5312}
          height={2724}
          alt={`Image de couverture de ${client}`}
        />
        <ul
          className={
            "hidden @lg:flex absolute inset-x-8 bottom-8 z-10 gap-2 flex-row flex-wrap justify-end"
          }
        >
          {categories.map((value, index) => (
            <li
              key={index}
              className={
                "surtitle surtitle-2 bg-hatch-secondary shadow-slate-800/25 rounded pl-3 pr-2 py-1 bg-slate-500/25 text-white shadow-xl"
              }
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className={"p-5 @md:p-14"}>
        <div className={"gap-14 grid @2xl:grid-cols-2"}>
          <div>
            <div className={"flex justify-between items-stretch mb-14"}>
              <div>
                <div className={"surtitle surtitle-2 flex text-slate-500"}>
                  <Clock className={"mr-2 h-5 w-5"} />
                  {duration}
                </div>
                <h2 className={"title title-2 mt-8 mb-4"}>{client}</h2>
                <ul
                  className={
                    "flex @lg:hidden gap-2 flex flex-row flex-wrap mt-1 my-5"
                  }
                >
                  {categories.map((value, index) => (
                    <li
                      key={index}
                      className={
                        "surtitle surtitle-2 bg-hatch-secondary rounded pl-2 pr-1"
                      }
                    >
                      {value}
                    </li>
                  ))}
                </ul>
                {website != null && (
                  <Link
                    href={website}
                    className={"btn btn-tertiary"}
                    rel="nofollow noopener noreferrer"
                    target={"_blank"}
                  >
                    <span>Voir la réalisation</span>
                    <ArrowUpRight />
                  </Link>
                )}
              </div>
            </div>
            <div>
              <p className={"subtitle subtitle-2 @xl:mb-0"}>{work}</p>
            </div>
          </div>

          <div className={"@2xl:mt-16 space-y-14 self-end"}>
            <div>
              <h3 className={"title title-4 mb-3"}>Client</h3>
              <p className={"body body-1"}>{description}</p>
            </div>
            <div>
              <h3 className={"title title-4 mb-3"}>Technologies</h3>
              <ul className={"gap-2 flex flex-row flex-wrap mt-1"}>
                {technologies.map((value, index) => (
                  <li
                    key={index}
                    className={
                      "surtitle surtitle-2 bg-hatch-secondary rounded pl-2 pr-1"
                    }
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
