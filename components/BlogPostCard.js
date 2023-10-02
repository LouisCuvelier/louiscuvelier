import getBase64 from "utils/getBase64";
import CardEffect from "./CardEffect";
import Link from "next/link";
import Image from "next/image";
import Date from "./Date";
import { ClockIcon } from "@heroicons/react/24/outline";

export default async function BlogPostCard({
  id,
  index,
  title,
  publicationDate,
  description,
  cover,
  readingTime,
}) {
  const base64 = await getBase64(cover);

  return (
    <CardEffect
      as={"article"}
      key={id}
      className={`${index === 0 ? "col-span-2" : "col-span-2 md:col-span-1"}`}
    >
      <Link href={`/blog/${id}`} className={"h-full flex flex-col"}>
        <div className={"relative"}>
          <div className={`aspect-video`}>
            <Image
              {...(index === 0 && { priority: true })}
              src={cover}
              placeholder={"blur"}
              blurDataURL={base64}
              className={"object-center rounded-t object-cover"}
              fill={true}
              alt={title}
            />
          </div>
        </div>
        <div className={"p-8 flex flex-col justify-between h-full"}>
          <div>
            <h2 className={`title mb-2 ${index === 0 ? "title-3" : "title-4"}`}>
              {title}
            </h2>
            <div
              className={"caption caption-1 text-slate-500 flex items-center"}
            >
              <ClockIcon className={"w-4 h-4 mr-1"} />
              <Date isPubDate={true} dateString={publicationDate} />
              <span className={"px-1"}>–</span>
              <span>{Math.round(readingTime.minutes)} min de lecture</span>
            </div>
            <p
              className={`subtitle my-8 ${
                index === 0 ? "subtitle-1" : "subtitle-2"
              }`}
            >
              {description}
            </p>
          </div>
          <div className={"text-right"}>
            <button className={"btn btn-tertiary"}>Lire la suite</button>
          </div>
        </div>
      </Link>
    </CardEffect>
  );
}
