import {
  getAllPostIds,
  getPostData,
  getPreviousAndNextPost,
  getSortedPostsData,
} from "../../../utils/posts";
import Date from "/components/Date";
import "styles/prism.css";
import SocialShare from "../../../components/SocialShare";
import PostContent from "../../../components/PostContent";
import Sidebar from "../../../components/Sidebar";
import Link from "next/link";
import { parseISO } from "date-fns";
import getMetadata from "../../../utils/getMetadata";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import CardEffect from "../../../components/CardEffect";

export async function generateMetadata({ params }) {
  const data = await getPostData(params.id, "guide-seo");
  const sortedPostsData = await getSortedPostsData("guide-seo", "desc");
  const actualIndex = sortedPostsData.findIndex(
    (post) => post.id === params.id
  );
  const { frontmatter, readingTime } = data;

  const title = `${frontmatter.title}`;
  const description = `${frontmatter.seoDescription}`;
  const url = `guide-seo/${params.id}`;

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
    ogImageSurtitle: `Guide du SEO – Chapitre ${actualIndex + 1}/${
      sortedPostsData.length
    }`,
    ogImageDate: frontmatter.updateDate,
    ogImageReadingTime: Math.round(readingTime.minutes),
  });
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
  const sortedPostsData = await getSortedPostsData("guide-seo", "desc");
  const actualIndex = sortedPostsData.findIndex(
    (post) => post.id === params.id
  );

  return (
    <article
      className={
        "[perspective:20000px] max-w-screen-lg mx-auto grid grid-cols-12 gap-y-10 gap-x-6"
      }
    >
      <header className={"border-hatch col-span-12 border-b-[10px] pb-16"}>
        <div className={"surtitle surtitle-1 mb-2"}>
          <Link href={"/guide-seo"}>
            Guide du SEO – Chapitre {actualIndex + 1}/{sortedPostsData.length}
          </Link>
        </div>
        <h1 className={"title title-2 mb-6"}>{frontmatter.title}</h1>
        <div
          className={
            "caption caption-1 text-slate-500 flex flex-wrap items-center mb-5"
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
        <div className={"grid grid-cols-2 md:gap-10 mb-10"}>
          {Object.keys(prevPost).length > 0 && (
            <article className={""}>
              <Link
                href={`${prevPost.id}`}
                className={"action action-secondary title-5 title"}
              >
                <ArrowLeftIcon className={"left"} />
                <span>
                  <span className={"sr-only sm:not-sr-only"}>Chapitre</span>{" "}
                  précédent
                </span>
              </Link>
            </article>
          )}
          {Object.keys(nextPost).length > 0 && (
            <article className={"md:col-start-2 text-right"}>
              <Link
                href={`${nextPost.id}`}
                className={"action action-secondary title-5 title"}
              >
                <span>
                  <span className={"sr-only sm:not-sr-only"}>Chapitre</span>{" "}
                  suivant
                </span>
                <ArrowRightIcon className={"right"} />
              </Link>
            </article>
          )}
        </div>
        <p className={"subtitle subtitle-1 mb-12"}>
          {frontmatter.introduction}
        </p>

        <PostContent content={content} />

        <div
          className={
            "group-hover grid md:grid-cols-2 mt-20 gap-10 transition duration-300 ease-in-out"
          }
        >
          {Object.keys(prevPost).length > 0 && (
            <CardEffect as={"article"} className={""}>
              <Link
                href={`${prevPost.id}`}
                className={"group flex-col flex p-5 justify-between h-full"}
              >
                <div className={"mb-5"}>
                  <div className={"surtitle surtitle-2 mb-2"}>
                    Chapitre précédent
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
            </CardEffect>
          )}
          {Object.keys(nextPost).length > 0 && (
            <CardEffect
              as={"article"}
              className={"order-first md:order-none md:col-start-2"}
            >
              <Link
                href={`${nextPost.id}`}
                className={"group flex-col flex p-5 justify-between h-full"}
              >
                <div className={"mb-5"}>
                  <div className={"surtitle surtitle-2 mb-2"}>
                    Chapitre suivant
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
            </CardEffect>
          )}
        </div>
      </div>
      <aside className={"col-span-12 lg:col-span-3 relative"}>
        <div className={"sticky top-[calc(104px+12px+20px)]"}>
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

export const dynamicParams = false;
