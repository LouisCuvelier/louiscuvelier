import { getSortedRealizationsData } from "../../../lib/realizations";
import ProjectCard from "../../../components/ProjectCard";

export const metadata = {
  title: "Réalisations - Louis Cuvelier",
  description:
    "Découvrez mes réalisations en développement front-end, automatisation et SEO. Parcourez des projets sur mesure et innovants qui ont aidé mes clients à atteindre leurs objectifs.",
};

export default function Realizations() {
  const allProjectsData = getSortedRealizationsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Réalisations</h1>
      </section>

      <section
        className={
          "perspective-20000 flex flex-col gap-16 mx-auto -mx-5 md:mx-5"
        }
      >
        {allProjectsData.map((props, index) => (
          <ProjectCard key={index} index={index} {...props} />
        ))}
      </section>
    </>
  );
}
