import { getSortedRealizationsData } from "/lib/realizations";
import RealizationCard from "/components/RealizationCard";

const title = "Réalisations";
const description =
  "Découvrez mes réalisations en développement front-end, automatisation et SEO. Parcourez des projets sur mesure et innovants qui ont aidé mes clients à atteindre leurs objectifs.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://louiscuvelier.com/realisations",
  },
  twitter: {
    title,
    description,
  },
};

export default function Realizations() {
  const allProjectsData = getSortedRealizationsData();

  return (
    <>
      <section
        className={
          "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-1"}>Réalisations</h1>
      </section>

      <section
        className={
          "perspective-20000 max-w-screen-lg flex flex-col gap-16 mx-auto"
        }
      >
        {allProjectsData.map((props, index) => (
          <RealizationCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}
