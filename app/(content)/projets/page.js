import { getSortedProjectsData } from "../../../lib/projects";
import ProjectCard from "../../../components/ProjectCard";
export default function Projects() {
  const allProjectsData = getSortedProjectsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Projets</h1>
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
