import { getAllPostIds, getPostData } from "/lib/posts";
import Date from "/components/Date";
import { openGraphImage } from "../../shared-metadata";

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getPostData(params.id);
  const { frontmatter } = data;

  const title = `${frontmatter.title}`;
  const description = `${frontmatter.description}`;

  return {
    title,
    description,
    openGraph: {
      images: [frontmatter.image],
      title,
      description,
      url: `https://louiscuvelier.com/blog/${params.id}`,
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
  const data = await getPostData(params.id);
  const { frontmatter, content } = data;

  return (
    <>
      <article className={"perspective-20000 max-w-screen-lg mx-auto"}>
        <header
          className={
            "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
          }
        >
          <h1 className={"title title-1"}>{frontmatter.title}</h1>
          <div className={"caption caption-1"}>
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
        <div className={"max-w-screen-md"}>
          <p className={"subtitle subtitle-1 mb-20"}>
            {frontmatter.description}
          </p>
          {content}
        </div>
      </article>
    </>
  );
}

export function generateStaticParams() {
  return getAllPostIds();
}
