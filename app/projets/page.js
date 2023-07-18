import { getSortedProjectsData } from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard";
export default function Projects() {
  const allProjectsData = getSortedProjectsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Projets</h1>
      </section>

      <section className={"perspective-10000 flex flex-col gap-16 mx-auto"}>
        {allProjectsData.map((props, index) => (
          <ProjectCard index={index} {...props} />
        ))}
      </section>
    </>
  );
}
