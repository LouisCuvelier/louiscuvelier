import CardEffect from "./CardEffect";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";

export default async function GuidePostCard({
  id,
  index,
  title,
  introduction,
  readingTime,
  length,
}) {
  return (
    <CardEffect as={"article"} key={id}>
      <Link href={`/guide-seo/${id}`} className={"h-full flex flex-col"}>
        <div className={"p-8 flex flex-col justify-between h-full"}>
          <div>
            <span className={"surtitle surtitle-1 mb-3"}>
              Chapitre {index + 1}/{length}
            </span>
            <h2 className={`title title-3 mb-3`}>{title}</h2>
            <div
              className={"caption caption-1 text-slate-500 flex items-center"}
            >
              <ClockIcon className={"w-4 h-4 mr-1"} />
              <span>{Math.round(readingTime.minutes)} min de lecture</span>
            </div>
            <p className={`subtitle subtitle-1 my-8`}>{introduction}</p>
          </div>
          <div className={"text-right"}>
            <button className={"btn btn-tertiary"}>Commencer</button>
          </div>
        </div>
      </Link>
    </CardEffect>
  );
}
