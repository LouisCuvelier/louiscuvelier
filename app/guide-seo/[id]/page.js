import { getAllPostIds, getPostData, getPreviousAndNextPost } from "/lib/posts";
import Date from "/components/Date";
import "styles/prism.css";
import SocialShare from "../../../components/SocialShare";
import TableOfContent from "../../../components/TableOfContent";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";
import { parseISO } from "date-fns";
import getMetadata from "../../../lib/getMetadata";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getPostData(params.id, "guide-seo");
  const { frontmatter } = data;

  const title = `${frontmatter.title}`;
  const description = `${frontmatter.description}`;
  const url = `guide-seo/${params.id}`;

  const article = {
    type: "article",
    publishedTime: parseISO(frontmatter.publicationDate),
    modifiedTime: parseISO(frontmatter.updateDate),
  };

  return getMetadata({ url, title, description, article });
}

export default async function Post({ params }) {
  const { frontmatter, content, readingTime } = await getPostData(
    params.id,
    "guide-seo"
  );
  const { prev: prevPost, next: nextPost } = getPreviousAndNextPost(
    params.id,
    "guide-seo",
    "desc"
  );

  return (
    <article
      className={
        "[perspective:20000px] max-w-screen-lg mx-auto grid grid-cols-12 gap-y-32 gap-x-6"
      }
    >
      <header className={"border-hatch col-span-12 border-b-[10px] pb-16"}>
        <div className={"surtitle surtitle-1 mb-2"}>Guide du SEO</div>
        <h1 className={"title title-2 mb-6"}>{frontmatter.title}</h1>
        <div
          className={
            "caption caption-1 text-slate-500 flex flex-wrap items-center"
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
        <p className={"subtitle subtitle-1 mb-12"}>{frontmatter.description}</p>
        <TableOfContent />
        {content}

        <div
          className={
            "group-hover grid md:grid-cols-2 mt-20 gap-10 transition duration-300 ease-in-out"
          }
        >
          {Object.keys(prevPost).length > 0 && (
            <article className={""}>
              <Link
                href={`${prevPost.id}`}
                className={
                  "group border-hatch flex-col flex border-[12px] p-5 justify-between h-full"
                }
              >
                <div className={"mb-5"}>
                  <div className={"surtitle surtitle-2 mb-2"}>
                    Guide précédent
                  </div>
                  <h6 className={"title-4 title mb-5"}>{prevPost.title}</h6>
                  <p className={"body body-1"}>{prevPost.description}</p>
                </div>
                <div className={""}>
                  <ArrowLeftIcon
                    className={
                      "group-hover:text-teal-700 h-9 w-9 transition ease-in-out group-hover:-translate-x-2"
                    }
                  />
                </div>
              </Link>
            </article>
          )}
          {Object.keys(nextPost).length > 0 && (
            <article className={"order-first md:order-none md:col-start-2"}>
              <Link
                href={`${nextPost.id}`}
                className={
                  "group border-hatch flex-col flex border-[12px] p-5 justify-between h-full"
                }
              >
                <div className={"mb-5"}>
                  <div className={"surtitle surtitle-2 mb-2"}>
                    Guide suivant
                  </div>
                  <h6 className={"title-4 title mb-5"}>{nextPost.title}</h6>
                  <p className={"body body-1"}>{nextPost.description}</p>
                </div>
                <div className={""}>
                  <ArrowRightIcon
                    className={
                      "group-hover:text-teal-700 h-9 w-9 ml-auto transition ease-in-out group-hover:translate-x-2"
                    }
                  />
                </div>
              </Link>
            </article>
          )}
        </div>
      </div>
      <aside className={"col-span-12 lg:col-span-3 relative"}>
        <div className={"sticky top-6"}>
          <Sidebar>
            <div className={"body body-1 p-5"}>
              {frontmatter?.cta
                ? frontmatter.cta
                : "Besoin d'un site, d'être mieux référencé sur Google ou d'automatiser vos process ?"}{" "}
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
  );
}

export function generateStaticParams() {
  return getAllPostIds("guide-seo");
}
