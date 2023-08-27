import { openGraphImage } from "../shared-metadata";
import PrestationCard from "../../components/PrestationCard";

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
