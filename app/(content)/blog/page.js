import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import Date from "../../../components/Date";

const title = "Blog";
const description =
  "Explorez mon blog pour découvrir des articles sur le développement front-end, l'automatisation, le SEO et bien plus encore. Découvrez des astuces, des analyses approfondies et des conseils pratiques pour optimiser vos projets digitaux.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://louiscuvelier.com/blog",
  },
  twitter: {
    title,
    description,
  },
};

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <section
        className={
          "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-1"}>Blog</h1>
      </section>
      <section className={"max-w-screen-lg mx-auto space-y-32"}>
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
