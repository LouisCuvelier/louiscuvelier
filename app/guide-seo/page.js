import { getSortedPostsData } from "../../lib/posts";
import getMetadata from "../../lib/getMetadata";
import GuidePostCard from "../../components/GuidePostCard";

const title = "Guide du SEO";
const description =
  "Grâce à ce guide sur le SEO, apprenez les bases du SEO pour commencer à obtenir de la performance sur le référencement de votre site.";
const url = "blog";

export const metadata = getMetadata({ url, title, description });

export default function Blog() {
  const allPostsData = getSortedPostsData("guide-seo", "desc");

  return (
    <>
      <section
        className={
          "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-2"}>Guide du SEO</h1>
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
