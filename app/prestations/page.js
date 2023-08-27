import { openGraphImage } from "../shared-metadata";
import PrestationCard from "../../components/PrestationCard";

const title = "Prestations";
const description =
  "De la création de votre site internet à l'automatisation méticuleuse et au référencement naturel stratégique, nos prestations transforment vos ambitions en succès en ligne. Découvrez comment nous créons, simplifions et propulsons votre présence sur internet.";
const url = "prestations";

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

export default function Prestations() {
  return (
    <>
      <section
        className={
          "border-hatch mb-32 max-w-screen-lg mx-auto border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-1"}>Prestations</h1>
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
              "Performants, sur mesure, adapaté à tous les écrans et optimisé pour le SEO",
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
              "Outil interne",
              "Intranet/Extranet",
              "Intégration web",
              "MVP",
            ],
          },
          {
            title: "Automatisation",
            technologies: ["Zapier", "Make", "Zoho Flow", "Code personnalisé"],
            subtitle:
              "De vos processus pour vous faire gagner du temps et de l'argent",
            services: ["Opérationnels", "Support", "Pilotage", "Mesure"],
          },
          {
            title: "Référencement naturel/SEO",
            subtitle:
              "Pour augmenter votre visibilté sur les moteurs de recherche",
            services: [
              "Conception d'architecture",
              "Optimisation technique",
              "Génération programmatique",
              "Rédaction",
              "Consulting",
              "Formation",
            ],
          },
        ].map((props, index) => (
          <PrestationCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}
