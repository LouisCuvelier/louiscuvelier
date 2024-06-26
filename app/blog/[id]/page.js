import { getAllPostIds, getPostData } from "../../../utils/posts";
import Date from "/components/atoms/Date";
import "styles/prism.css";
import SocialShare from "../../../components/organisms/SocialShare";
import TableOfContent from "../../../components/organisms/PostContent";
import Sidebar from "../../../components/molecules/Sidebar";
import Link from "next/link";
import { parseISO } from "date-fns";
import getMetadata from "../../../utils/getMetadata";
import { ClockIcon } from "@heroicons/react/24/outline";

export async function generateMetadata({ params }) {
  const data = await getPostData(params.id, "blog");
  const { frontmatter, readingTime } = data;

  const title = `${frontmatter.title}`;
  const description = `${frontmatter.description}`;
  const url = `blog/${params.id}`;

  const article = {
    type: "article",
    publishedTime: parseISO(frontmatter.publicationDate),
    modifiedTime: parseISO(frontmatter.updateDate),
  };

  return getMetadata({
    url,
    title,
    description,
    article,
    ogImageSurtitle: "Blog",
    ogImageDate: frontmatter.updateDate,
    ogImageReadingTime: Math.round(readingTime.minutes),
  });
}

export default async function Post({ params }) {
  const { frontmatter, content, readingTime } = await getPostData(
    params.id,
    "blog",
  );

  return (
    <>
      <article
        className={
          "[perspective:20000px] max-w-screen-lg mx-auto grid grid-cols-12 gap-y-32 gap-x-6"
        }
      >
        <header className={"border-hatch col-span-12 border-b-[10px] pb-16"}>
          <div className={"surtitle surtitle-1 mb-2"}>
            <Link href={"/blog"}>Blog</Link>
          </div>
          <h1 className={"title title-2 mb-6"}>{frontmatter.title}</h1>
          <div
            className={
              "caption caption-1 text-slate-500 flex items-center flex-wrap"
            }
          >
            <ClockIcon className={"w-4 h-4 mr-1"} />
            <span>
              Publié le{" "}
              <Date isPubDate={true} dateString={frontmatter.publicationDate} />
            </span>
            <span className={"px-1"}>–</span>
            <span>
              Mis à jour le{" "}
              <Date isPubDate={false} dateString={frontmatter.updateDate} />
            </span>
            <span className={"px-1"}>–</span>
            <span>{Math.round(readingTime.minutes)} min de lecture</span>
          </div>
        </header>
        <div className={"col-span-12 lg:col-span-9"}>
          <p className={"subtitle subtitle-1 mb-12"}>
            {frontmatter.description}
          </p>
          <TableOfContent content={content} />
        </div>
        <aside className={"col-span-12 lg:col-span-3 relative"}>
          <div className={"sticky top-6"}>
            <Sidebar>
              <div className={"body body-1 p-5"}>
                Besoin d'un site, d'être mieux référencé sur Google ou
                d'automatiser vos process ?{" "}
                <Link
                  href={"https://calendly.com/louiscuvelier/intro"}
                  target={"_blank"}
                  rel="nofollow noopener noreferrer"
                  className={"link link-primary"}
                >
                  Commencez dès maintenant
                </Link>
              </div>
              <SocialShare
                url={`${new URL("https://louiscuvelier.com")}blog/${params.id}`}
                title={frontmatter.title}
              />
            </Sidebar>
          </div>
        </aside>
      </article>
    </>
  );
}

export function generateStaticParams() {
  return getAllPostIds("blog");
}

export const dynamicParams = false;
