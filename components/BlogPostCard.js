import getBase64 from "lib/getBase64";
import CardEffect from "./CardEffect";
import Link from "next/link";
import Image from "next/image";
import Date from "./Date";

export default async function BlogPostCard({
  id,
  index,
  title,
  publicationDate,
  description,
  cover,
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
            <h2 className={`title mb-2 ${index === 0 ? "title-2" : "title-3"}`}>
              {title}
            </h2>
            <div className={"caption caption-1 text-slate-500"}>
              <Date isPubDate={true} dateString={publicationDate} />
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
