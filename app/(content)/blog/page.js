import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import Date from "../../../components/Date";

export const metadata = {
  title: "Blog - Louis Cuvelier",
  description:
    "Explorez mon blog pour découvrir des articles sur le développement front-end, l'automatisation, le SEO et bien plus encore. Découvrez des astuces, des analyses approfondies et des conseils pratiques pour optimiser vos projets digitaux.",
};

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Blog</h1>
      </section>
      <section className={"max-w-screen-sm mx-auto space-y-32"}>
        {allPostsData.map(({ id, publicationDate, title, description }) => (
          <article key={id}>
            <Link href={`/blog/${id}`} className={"flex flex-col"}>
              <h2 className={"title title-2"}>{title}</h2>
              <span className={"caption caption-1 my-3"}>
                <Date isPubDate={true} dateString={publicationDate} />
              </span>
              <p className={"subtitle subtitle-1"}>{description}</p>
              <div className={"text-right mt-5"}>
                <button className={"btn btn-primary"}>Lire la suite</button>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
