import { getSortedRealizationsData } from "/lib/realizations";
import RealizationCard from "/components/RealizationCard";
import { openGraphImage } from "../shared-metadata";

const title = "Réalisations";
const description =
  "Découvrez mes réalisations en développement front-end, automatisation et SEO. Parcourez des projets sur mesure et innovants qui ont aidé mes clients à atteindre leurs objectifs.";
const url = "realisations";

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

export default function Realizations() {
  const allProjectsData = getSortedRealizationsData();

  return (
    <>
      <section
        className={
          "border-hatch mx-auto max-w-screen-lg mb-32 border-b-[10px] pb-16"
        }
      >
        <h1 className={"title title-1 text-6xl sm:text-8xl"}>Réalisations</h1>
      </section>

      <section
        className={
          "[perspective:20000px] max-w-screen-lg flex flex-col gap-16 mx-auto"
        }
      >
        {allProjectsData.map((props, index) => (
          <RealizationCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}
