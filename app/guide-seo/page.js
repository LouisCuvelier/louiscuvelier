import { getSortedPostsData } from "../../utils/posts";
import getMetadata from "../../utils/getMetadata";
import GuidePostCard from "../../components/organisms/GuidePostCard";

const title = `Guide complet du SEO (édition ${new Date().getFullYear()})`;
const description =
  "Apprenez le SEO de A à Z en 7 chapitres. Ce guide est la compilation de plusieurs années d'expériences pour passer un site de 0 à 160 000 pages vues/mois.";
const url = "guide-seo";

export const metadata = getMetadata({
  url,
  title,
  description,
  ogImageTitle: `Acquérir de la visiblité en ligne grâce au SEO : Le guide complet (édition ${new Date().getFullYear()})`,
  ogImageSurtitle: "Guide du SEO",
});

export default function Blog() {
  const allPostsData = getSortedPostsData("guide-seo", "desc");

  return (
    <>
      <section
        className={
          "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
        }
      >
        <span className={"surtitle-1 surtitle mb-3"}>Guide du SEO</span>
        <h1 className={"title title-2"}>
          Acquérir de la visiblité en ligne grâce au SEO{" "}
          <span className={"sr-only"}>(référencement naturel)</span> : Le guide
          complet (édition {new Date().getFullYear()})
        </h1>
      </section>

      <section
        className={
          "gap-16 [perspective:20000px] max-w-screen-lg mx-auto grid grid-cols-1"
        }
      >
        <p className={"subtitle subtitle-1"}>
          Grâce à ce guide complet du SEO, vous allez apprendre comment être bon
          en référencement naturel. Ce guide est la compilation de plusieurs
          années de recherches et d'expériences pour amener un de mes site de 0
          à 160 000 pages vues par mois. Ne perdez pas de temps et commencez dès
          maintenant pour apprendre à mieux référencer vos sites !
        </p>

        {allPostsData.map((props, index) => (
          <GuidePostCard
            key={index}
            length={allPostsData.length}
            index={index}
            {...props}
          />
        ))}

        <p className={"body body-1"}>
          Ce guide a pour base mon mémoire de{" "}
          <a href={"/a-propos"} className={"link link-primary"}>
            fin d'étude
          </a>{" "}
          de Master 2. Il m'a permis de valider mon cursus scolaire. Le contenu
          a été modifié pour le web et a été actualisé pour correspondre aux
          standards d'aujourd'hui.
        </p>
      </section>
    </>
  );
}
