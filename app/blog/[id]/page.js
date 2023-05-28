import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/Date";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return [paths];
}

export default async function Post({ params }) {
  const { frontmatter, content } = await getPostData(params.id);
  return (
    <>
      <article className={"max-w-screen-sm mx-auto"}>
        <header>
          <h1 className={"text-5xl font-sans"}>{frontmatter.title}</h1>
          <div className={"text-xs font-sans uppercase tracking-widest mt-2"}>
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
        <p className={"text-xl mt-8 leading-normal"}>
          {frontmatter.description}
        </p>
        {content}
      </article>
    </>
  );
}
