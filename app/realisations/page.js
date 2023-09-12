import { getSortedRealizationsData } from "/lib/realizations";
import RealizationCard from "/components/RealizationCard";
import getMetadata from "../../lib/getMetadata";

const title = "Réalisations";
const description =
  "Découvrez mes réalisations sur-mesure en création de site internet, référencement naturel (SEO) et automatisation des process.";
const url = "realisations";

export const metadata = getMetadata({ url, title, description });

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
