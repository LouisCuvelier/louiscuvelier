import CustomLink from "../../components/CustomLink";
import { Tooltip } from "../../components/ReactTooltip";

export default function About() {
  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>A propos</h1>
      </section>
      <section className={"max-w-screen-sm mx-auto space-y-9"}>
        <p className={"body body-1"}>
          Je suis Louis Cuvelier, freelance et entrepreneur de{" "}
          {Math.floor(
            (new Date() - new Date("1997-04-01").getTime()) / 3.15576e10
          )}{" "}
          ans diplômé d'un Master 2 Chef de projet web à Ynov Informatique (ex
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
          je leur apporte des solutions sur le{" "}
          <span
            data-tooltip-id="front-end"
            data-tooltip-content="HTML, CSS, JavaScript, React, Next.js ..."
            data-tooltip-place="top"
            data-tooltip-wrapper="span"
            className={"link link-primary cursor-help"}
          >
            développement front-end
          </span>
          <Tooltip
            id="front-end"
            className={
              "bg-hatch-secondary ring-1 text-slate-950 shadow-md ring-slate-800 rounded bg-slate-50 px-2 py-1"
            }
          />
          ,{" "}
          <span
            data-tooltip-id="automatisation"
            data-tooltip-content="Make, Zapier, Zoho Flow, code custom ..."
            data-tooltip-place="top"
            data-tooltip-wrapper="span"
            className={"link link-primary cursor-help"}
          >
            automatisation
          </span>
          <Tooltip
            id="automatisation"
            className={
              "bg-hatch-secondary ring-1 text-slate-950 shadow-md ring-slate-800 rounded bg-slate-50 px-2 py-1"
            }
          />{" "}
          et{" "}
          <span
            data-tooltip-id="seo"
            data-tooltip-content="SEO programmatique, rédaction
          ..."
            data-tooltip-place="top"
            data-tooltip-wrapper="span"
            className={"link link-primary cursor-help"}
          >
            SEO
          </span>
          <Tooltip
            id="seo"
            className={
              "bg-hatch-secondary ring-1 text-slate-950 shadow-md ring-slate-800 rounded bg-slate-50 px-2 py-1"
            }
          />{" "}
          pour qu'ils atteignent leurs objectifs.
        </p>

        <p className={"body body-1"}>
          Si vous avez besoin d'un développeur front-end expérimenté, d'un
          expert en automatisation ou d'un consultant en SEO, n'hésitez pas à me
          contacter pour discuter de votre projet.
        </p>
      </section>
    </>
  );
}