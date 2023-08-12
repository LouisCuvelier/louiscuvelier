import CustomLink from "../../../components/CustomLink";

export const metadata = {
  title: "À propos - Louis Cuvelier",
  description:
    "Découvrez l'histoire derrière mon parcours en freelance et entrepreneuriat. Diplômé d'un Master 2 en Chef de projet web, j'ai évolué dans le monde du développement front-end, de l'automatisation et du SEO. Mon engagement à créer des solutions pratiques et innovantes est renforcé par mon expérience entrepreneuriale. Plongez dans mon profil professionnel et contactez-moi pour collaborer sur vos défis digitaux.",
};

export default function About() {
  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>À propos</h1>
      </section>
      <section className={"max-w-screen-sm mx-auto space-y-9"}>
        <p className={"body body-1"}>
          Je suis Louis Cuvelier, freelance et entrepreneur de{" "}
          {Math.floor(
            (new Date() - new Date("1997-04-01").getTime()) / 3.15576e10
          )}{" "}
          ans diplômé d'un Master 2 Chef de projet web à Ynov Informatique (ex-
          Ingésup). Passionné par l'informatique, et plus particulièrement le
          code, j'aime créer des outils beaux, utiles et pratiques qui
          permettent de faire rendre la vie meilleur à leurs utilisateurs.
        </p>
        <p className={"body body-1"}>
          Ainsi, dès 2016, en parallèle de mes études, j'ai débuté en
          développant des sites internets et lancer des projets qui m'ont permis
          de monter rapidement en compétences, tout en commençant à gagner ma
          vie.
        </p>
        <p className={"body body-1"}>
          Depuis, j'ai revendu Coursier Job, un site que j'avais créé, et j'ai
          co-fondé{" "}
          <CustomLink href={"https://www.bulneo.fr"}>Bulneo</CustomLink> (+ de
          15 salariés aujourd'hui) avec comme but d'apporter mon expertise pour
          révolutionner les vieilles pratiques du monde de la rénovation de
          salle de bain.
        </p>
        <p className={"body body-1"}>
          Désormais, je reviens à mon premier amour, le code, pour faire
          bénéficier de mes services, mon savoir et mes conseils à mes clients.
          Plus particulièrement, grâce à mon expérience entrepreneurial, je suis
          capable de comprendre en profondeur leurs problématiques business et
          je leur apporte des solutions sur le développement front-end (HTML,
          CSS, JavaScript, React, Next.js&nbsp;...), l'automatisation (Make,
          Zapier, Zoho Flow, code custom&nbsp;...) et le SEO (programmatique,
          rédaction&nbsp;...) pour qu'ils atteignent leurs objectifs.
        </p>

        <p className={"body body-1"}>
          Si vous avez besoin d'un développeur front-end expérimenté, d'un
          expert en automatisation ou d'un consultant en SEO, n'hésitez pas à me{" "}
          <CustomLink href={"/contact"}>contacter</CustomLink> pour discuter de
          votre projet.
        </p>
      </section>
    </>
  );
}
