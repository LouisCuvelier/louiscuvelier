import { getSortedPostsData } from "../../lib/posts";
import BlogPostCard from "../../components/BlogPostCard";
import { openGraphImage } from "../shared-metadata";

const title = "Blog";
const description =
  "Explorez mon blog pour découvrir des articles sur le développement front-end, l'automatisation, le SEO et bien plus encore. Découvrez des astuces, des analyses approfondies et des conseils pratiques pour optimiser vos projets digitaux.";
const url = "blog";

export const metadata = {
  alternates: {
    canonical: url,
  },
  title,
  description,
  openGraph: {
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

      <section
        className={
          "perspective-20000 max-w-screen-lg mx-auto gap-20 grid grid-cols-2"
        }
      >
        {allPostsData.map((props, index) => (
          <BlogPostCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}
