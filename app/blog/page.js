import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";

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

      <section className={"max-w-screen-lg mx-auto gap-20 grid grid-cols-2"}>
        {allPostsData.map(
          ({ id, publicationDate, title, description }, index) => (
            <article
              key={id}
              className={`border-hatch border-[12px] p-8 ${
                index == 0 ? "col-span-2" : ""
              }`}
            >
              <Link
                href={`/blog/${id}`}
                className={"flex flex-col justify-between h-full"}
              >
                <div>
                  <h2 className={`title ${index == 0 ? "title-2" : "title-3"}`}>
                    {title}
                  </h2>
                  <span className={"caption caption-1"}>
                    <Date isPubDate={true} dateString={publicationDate} />
                  </span>
                  <p
                    className={`subtitle my-8 ${
                      index == 0 ? "subtitle-1" : "subtitle-2"
                    }`}
                  >
                    {description}
                  </p>
                </div>
                <div className={"text-right mt-5"}>
                  <button className={"btn btn-tertiary"}>Lire la suite</button>
                </div>
              </Link>
            </article>
          )
        )}
      </section>
    </>
  );
}
