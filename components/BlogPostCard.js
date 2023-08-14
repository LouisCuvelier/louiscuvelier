"use client";
import Link from "next/link";
import Date from "./Date";
import { useEffect } from "react";
import cardEffect from "../lib/card-effect";

export default function BlogPostCard({
  id,
  index,
  title,
  publicationDate,
  description,
}) {
  useEffect(() => {
    cardEffect(".cards");
  }, []);

  return (
    <article
      key={id}
      className={`cards cards border-hatch border-[12px] p-8 rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out ${
        index === 0 ? "col-span-2" : "col-span-2 md:col-span-1"
      }`}
    >
      <Link
        href={`/blog/${id}`}
        className={"flex flex-col justify-between h-full"}
      >
        <div>
          <h2 className={`title ${index === 0 ? "title-2" : "title-3"}`}>
            {title}
          </h2>
          <span className={"caption caption-1"}>
            <Date isPubDate={true} dateString={publicationDate} />
          </span>
          <p
            className={`subtitle my-8 ${
              index === 0 ? "subtitle-1" : "subtitle-2"
            }`}
          >
            {description}
          </p>
        </div>
        <div className={"text-right mt-5"}>
          <button className={"btn btn-tertiary"}>Lire la suite</button>
        </div>
      </Link>
    </article>
  );
}
