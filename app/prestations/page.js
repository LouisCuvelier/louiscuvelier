import PrestationCard from "../../components/PrestationCard";
import getMetadata from "../../lib/getMetadata";

const title = "Prestations";
const description =
  "Je réalise des sites internet sur-mesure, optimisés pour le référencement naturel (SEO) et j'automatise vos processus.";
const url = "prestations";

export const metadata = getMetadata({ url, title, description });

export default function Prestations() {
  return (
    <>
      <section
        className={
          "border-hatch mb-32 max-w-screen-lg mx-auto border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-2"}>Prestations</h1>
      </section>

      <section
        className={
          "max-w-screen-lg mx-auto gap-16 grid grid-cols-1 [perspective:20000px]"
        }
      >
        {[
          {
            title: "Création de site internet",
            subtitle:
              "Performant, sur-mesure, adapté à tous les écrans et optimisé pour le SEO",
            technologies: [
              "Next.js",
              "Tailwind CSS",
              "Strapi",
              "React.js",
              "JavaScript",
              "HTML",
              "CSS",
            ],
            services: [
              "Site vitrine / institutionnel",
              "Application web",
              "MVP",
              "Intégration web",
              "Outil interne",
              "Intranet / Extranet",
            ],
          },
          {
            title: "Référencement naturel (SEO)",
            subtitle:
              "Pour augmenter votre visiblité sur Google et les autres moteurs de recherche",
            services: [
              "Conception d'architecture",
              "Optimisation technique",
              "Génération programmatique",
              "Rédaction",
              "Consulting",
              "Formation",
            ],
          },
          {
            title: "Automatisation des processus",
            technologies: ["Zapier", "Make", "Zoho Flow", "Code personnalisé"],
            subtitle: "Pour vous faire gagner du temps et de l'argent",
            services: ["Opérationnels", "Support", "Pilotage", "Mesure"],
          },
        ].map((props, index) => (
          <PrestationCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}
