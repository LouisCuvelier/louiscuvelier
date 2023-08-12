import { getAllPostIds, getPostData } from "/lib/posts";
import Date from "/components/Date";

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getPostData(params.id);
  const { frontmatter } = data;

  return {
    title: frontmatter.title + " - Louis Cuvelier",
    description: frontmatter.description,
    openGraph: {
      images: [frontmatter.image],
    },
  };
}
export default async function Post({ params }) {
  const data = await getPostData(params.id);
  const { frontmatter, content } = data;

  return (
    <>
      <article className={"perspective-20000 max-w-screen-sm mx-auto"}>
        <header>
          <h1 className={"title title-2"}>{frontmatter.title}</h1>
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
          <p className={"subtitle subtitle-2 mt-8"}>
            {frontmatter.description}
          </p>
        </header>
        {content}
      </article>
    </>
  );
}

export function generateStaticParams() {
  return getAllPostIds();
}
