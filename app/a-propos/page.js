import CustomLink from "../../components/CustomLink";
import { openGraphImage } from "../shared-metadata";
import Link from "next/link";

const title = "À propos";
const description =
  "Découvrez l'histoire derrière mon parcours en freelance et entrepreneuriat. Diplômé d'un Master 2 en Chef de projet web, j'ai évolué dans le monde du développement front-end, de l'automatisation et du SEO. Mon engagement à créer des solutions pratiques et innovantes est renforcé par mon expérience entrepreneuriale. Plongez dans mon profil professionnel et contactez-moi pour collaborer sur vos défis digitaux.";
const url = "a-propos";

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

export default function About() {
  return (
    <>
      <section
        className={
          "border-hatch mb-32 max-w-screen-lg mx-auto border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-1"}>À propos</h1>
      </section>

      <section className={"max-w-screen-lg mx-auto mb-20"}>
        <div className={"max-w-screen-md space-y-9"}>
          <p className={"body body-1"}>
            Je m'appelle Louis Cuvelier, freelance et entrepreneur de{" "}
            {Math.floor(
              (new Date() - new Date("1997-04-01").getTime()) / 3.15576e10
            )}{" "}
            ans diplômé d'un Master 2 chef de projet web à Ynov Informatique
            (ex-Ingésup). Passionné par l'informatique, et plus particulièrement
            le code, j'aime créer des outils harmonieux, utiles et pratiques qui
            permettent de simplifier la vie de leurs utilisateurs.
          </p>
          <p className={"body body-1"}>
            Ainsi, dès 2016, en parallèle de mes études, j'ai débuté en
            développant des sites internet et en lançant des projets qui m'ont
            permis d'acquérir rapidement des compétences, tout en commençant à
            gagner ma vie.
          </p>
          <p className={"body body-1"}>
            Depuis, j'ai revendu Coursier Job, un site que j'avais créé, et j'ai
            co-fondé{" "}
            <CustomLink href={"https://www.bulneo.fr"}>Bulneo</CustomLink> (+ de
            15 salariés aujourd'hui) avec comme ambition d'apporter mon
            expertise pour révolutionner les anciennes pratiques du monde de la
            rénovation de salle de bain.
          </p>
          <p className={"body body-1"}>
            Désormais, je renoue avec ma passion première, le code, avec comme
            but de mettre à profit mon expertise, mes connaissances et mes
            conseils, au service de mes clients pour leur faire gagner du temps
            et de l'argent.
          </p>
          <p className={"body body-1"}>
            Fort de mon parcours entrepreneurial, j'ai acquis une vision à 360°
            qui me permet de comprendre tous les enjeux business autour d'une
            problématique et d'y apporter des solutions sur mesure en{" "}
            <Link className={"link link-primary"} href={"/prestations"}>
              création de site internet
            </Link>
            ,{" "}
            <Link className={"link link-primary"} href={"/prestations"}>
              automatisation des processus
            </Link>{" "}
            et{" "}
            <Link className={"link link-primary"} href={"/prestations"}>
              référencement naturel
            </Link>
            .
          </p>
          <p className={"body body-1"}>
            Si vous avez besoin d'un créateur de site internet expérimenté, d'un
            expert en automatisation ou d'un professionnel en référencement
            naturel (SEO), n'hésitez pas à me{" "}
            <CustomLink href={"/contact"}>contacter</CustomLink> pour discuter
            de votre projet.
          </p>
        </div>
      </section>
    </>
  );
}
