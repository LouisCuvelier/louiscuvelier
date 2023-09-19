import CardEffect from "./CardEffect";
import Link from "next/link";

export default async function GuidePostCard({ id, index, title, description }) {
  return (
    <CardEffect as={"article"} key={id}>
      <Link href={`/guide-seo/${id}`} className={"h-full flex flex-col"}>
        <div className={"p-8 flex flex-col justify-between h-full"}>
          <div>
            <h2 className={`title title-2 mb-2`}>{title}</h2>
            <p className={`subtitle subtitle-1 my-8`}>{description}</p>
          </div>
          <div className={"text-right"}>
            <button className={"btn btn-tertiary"}>Commencer</button>
          </div>
        </div>
      </Link>
    </CardEffect>
  );
}
