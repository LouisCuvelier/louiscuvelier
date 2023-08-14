import CustomLink from "../../components/CustomLink";

const title = "À propos";
const description =
  "Découvrez l'histoire derrière mon parcours en freelance et entrepreneuriat. Diplômé d'un Master 2 en Chef de projet web, j'ai évolué dans le monde du développement front-end, de l'automatisation et du SEO. Mon engagement à créer des solutions pratiques et innovantes est renforcé par mon expérience entrepreneuriale. Plongez dans mon profil professionnel et contactez-moi pour collaborer sur vos défis digitaux.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://louiscuvelier.com/a-propos",
  },
  twitter: {
    title,
    description,
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

      <section className={"max-w-screen-lg mx-auto"}>
        <div className={"max-w-screen-md space-y-9"}>
          <p className={"body body-1"}>
            Je suis un freelance et entrepreneur de{" "}
            {Math.floor(
              (new Date() - new Date("1997-04-01").getTime()) / 3.15576e10
            )}{" "}
            ans diplômé d'un Master 2 Chef de projet web à Ynov Informatique
            (ex-Ingésup). Passionné par l'informatique, et plus particulièrement
            le code, j'aime créer des outils beaux, utiles et pratiques qui
            permettent de faire rendre la vie meilleur à leurs utilisateurs.
          </p>
          <p className={"body body-1"}>
            Ainsi, dès 2016, en parallèle de mes études, j'ai débuté en
            développant des sites internets et lancer des projets qui m'ont
            permis de monter rapidement en compétences, tout en commençant à
            gagner ma vie.
          </p>
          <p className={"body body-1"}>
            Depuis, j'ai revendu Coursier Job, un site que j'avais créé, et j'ai
            co-fondé{" "}
            <CustomLink href={"https://www.bulneo.fr"}>Bulneo</CustomLink> (+ de
            15 salariés aujourd'hui) avec comme but d'apporter mon expertise
            pour révolutionner les vieilles pratiques du monde de la rénovation
            de salle de bain.
          </p>
          <p className={"body body-1"}>
            Désormais, je renoue avec ma passion première : le code. Mon but est
            de mettre à profit mon expertise, mes connaissances et mes conseils
            au service de mes clients.
          </p>
          <p className={"body body-1"}>
            Fort de mon parcours entrepreneurial, je sais plonger en profondeur
            dans les enjeux business de mes clients afin de proposer des
            solutions en développement front-end (HTML, CSS, JavaScript, React,
            Next.js&nbsp;…), automatisation (Make, Zapier, Zoho Flow, code sur
            mesure&nbsp;…) et SEO (programmatique, rédaction&nbsp;…) pour
            concrétiser leurs ambitions.
          </p>
          <p className={"body body-1"}>
            Si vous avez besoin d'un développeur front-end expérimenté, d'un
            expert en automatisation ou d'un consultant en SEO, n'hésitez pas à
            me <CustomLink href={"/contact"}>contacter</CustomLink> pour
            discuter de votre projet.
          </p>
        </div>
      </section>
    </>
  );
}
