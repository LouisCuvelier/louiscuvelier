import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/Date";
export default async function Post({ params }) {
  const { frontmatter, content } = await getPostData(params.id);
  return (
    <>
      <article className={"max-w-screen-sm mx-auto"}>
        <header className={"space-y-3"}>
          <h1 className={"title title-2"}>{frontmatter.title}</h1>
          <div className={"uppertitle-2 uppertitle"}>
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
          <p className={"body body-1"}>{frontmatter.description}</p>
        </header>
        {content}
      </article>
    </>
  );
}
