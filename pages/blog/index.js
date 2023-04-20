import Layout from "../../components/layouts/Layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Post({ allPostsData }) {
  return (
    <Layout>
      <section className={"text-center mb-32"}>
        <h1 className={"font-sans text-7xl"}>Blog</h1>
      </section>
      <section className={"max-w-screen-sm mx-auto space-y-32"}>
        {allPostsData.map(
          ({ id, publicationDate, title, description, updateDate }) => (
            <article key={id}>
              <Link href={`/blog/${id}`} className={"flex flex-col"}>
                <h2 className={"font-sans text-3xl leading-none"}>{title}</h2>
                <time
                  className={"text-xs font-sans uppercase tracking-widest mt-2"}
                  dateTime={publicationDate}
                >
                  {new Date(publicationDate).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className={"text-lg mt-5"}>{description}</p>
                <div className={"text-right mt-5"}>
                  <span className={"btn btn-secondary"}>
                    <span class={"bg-paper"}>Lire la suite</span>
                  </span>
                </div>
              </Link>
            </article>
          )
        )}
      </section>
    </Layout>
  );
}
