import { getAllPostIds, getPostData } from "/lib/posts";
import Date from "/components/Date";
import { openGraphImage } from "../../shared-metadata";
import "styles/prism.css";
import SocialShare from "../../../components/SocialShare";
import TableOfContent from "../../../components/TableOfContent";

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getPostData(params.id);
  const { frontmatter } = data;

  const title = `${frontmatter.title}`;
  const description = `${frontmatter.description}`;
  const url = `blog/${params.id}`;

  return {
    alternates: {
      canonical: url,
    },
    title,
    description,
    openGraph: {
      images: [frontmatter.image],
      title,
      description,
      url: url,
      ...openGraphImage,
    },
    twitter: {
      title,
      description,
      ...openGraphImage,
    },
  };
}

export default async function Post({ params }) {
  const { frontmatter, content } = await getPostData(params.id);

  return (
    <>
      <article
        className={
          "[perspective:20000px] max-w-screen-lg mx-auto grid grid-cols-12 gap-y-32 gap-x-6"
        }
      >
        <header
          className={"border-hatch mx-auto col-span-12 border-b-[10px] pb-16"}
        >
          <h1 className={"title title-2 mb-6"}>{frontmatter.title}</h1>
          <div className={"caption caption-1 text-slate-500"}>
            <span>
              Publié le{" "}
              <Date isPubDate={true} dateString={frontmatter.publicationDate} />
            </span>
            <span className={"px-1"}>–</span>
            <span>
              Mis à jour le{" "}
              <Date isPubDate={false} dateString={frontmatter.updateDate} />
            </span>
          </div>
        </header>
        <div className={"col-span-12 lg:col-span-9"}>
          <p className={"subtitle subtitle-1 mb-12"}>
            {frontmatter.description}
          </p>
          <TableOfContent />
          {content}
        </div>
        <aside className={"col-span-12 lg:col-span-3 relative"}>
          <div className={"sticky top-6"}>
            <SocialShare
              url={`${new URL("https://louiscuvelier.com")}blog/${params.id}`}
              title={frontmatter.title}
            />
          </div>
        </aside>
      </article>
    </>
  );
}

export function generateStaticParams() {
  return getAllPostIds();
}
