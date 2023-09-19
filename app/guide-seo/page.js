import { getSortedPostsData } from "../../lib/posts";
import getMetadata from "../../lib/getMetadata";
import GuidePostCard from "../../components/GuidePostCard";

const title = "Blog";
const description =
  "Explorez mon blog pour découvrir des articles sur le développement front-end, l'automatisation, le SEO et bien plus encore. Découvrez des astuces, des analyses approfondies et des conseils pratiques pour optimiser vos projets digitaux.";
const url = "blog";

export const metadata = getMetadata({ url, title, description });

export default function Blog() {
  const allPostsData = getSortedPostsData("guide-seo");

  return (
    <>
      <section
        className={
          "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-1"}>Guide du SEO</h1>
      </section>

      <section
        className={
          "gap-16 [perspective:20000px] max-w-screen-lg mx-auto grid grid-cols-1"
        }
      >
        <p className={"subtitle subtitle-1"}>
          Ce guide a pour base mon mémoire de{" "}
          <a href={"/a-propos"} className={"link link-primary"}>
            fin d'étude
          </a>{" "}
          de Master 2. Il m'a permis de valider mon cursus scolaire. Le contenu
          a été actualisé pour correspondre aux standards d'aujourd'hui.
        </p>

        {allPostsData.map((props, index) => (
          <GuidePostCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}