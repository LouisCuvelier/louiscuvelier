import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
export default function Post() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Blog</h1>
      </section>
      <section className={"max-w-screen-sm mx-auto space-y-28"}>
        {allPostsData.map(
          ({ id, publicationDate, title, description, updateDate }) => (
            <article key={id}>
              <Link href={`/blog/${id}`} className={"flex flex-col"}>
                <h2 className={"title title-2"}>{title}</h2>
                <span className={"uppertitle uppertitle-2 my-3"}>
                  <Date isPubDate={true} dateString={publicationDate} />
                </span>
                <p className={"body body-1"}>{description}</p>
                <div className={"text-right mt-5"}>
                  <button className={"btn btn-primary"}>Lire la suite</button>
                </div>
              </Link>
            </article>
          )
        )}
      </section>
    </>
  );
}
