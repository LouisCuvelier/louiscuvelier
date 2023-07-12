import Link from "next/link";
import { getSortedProjectsData } from "../../lib/projects";
import Image from "next/image";
export default function Projects() {
  const allProjectsData = getSortedProjectsData();
  const projectsLength = allProjectsData.length;

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Projets</h1>
      </section>

      <section className={"max-w-screen-sm grid grid-cols-1 gap-16 mx-auto"}>
        {allProjectsData.map(
          (
            {
              id,
              client,
              description,
              website,
              categories,
              work,
              duration,
              technologies,
              logo,
            },
            index
          ) => (
            <>
              <article
                key={id}
                className={"border-hatch  p-9 border-[12px] rounded"}
              >
                <div className={"space-y-10"}>
                  <div className={"flex justify-between items-stretch"}>
                    <div>
                      <span className={"uppertitle uppertitle-1"}>Client</span>
                      <h2 className={"title title-2"}>{client}</h2>
                      <Link
                        href={website}
                        className={"link link-primary body body-1"}
                        rel={"noopener noreferrer"}
                        target={"_blank"}
                      >
                        Voir le projet
                      </Link>
                    </div>
                    <figure
                      className={
                        "bg-hatch w-[100px] sm:w-[116px] relative object-contain rounded-[76%_24%_68%_32%_/_29%_67%_33%_71%]"
                      }
                    >
                      <Image
                        src={logo}
                        alt={`Logo de ${client}`}
                        fill={true}
                        className={"p-5"}
                      />
                    </figure>
                  </div>

                  <p className={"body body-1"}>{description}</p>

                  <div>
                    <h3 className={"title title-3"}>Prestation réalisée</h3>
                    <ul className={"gap-2 flex flex-row flex-wrap mt-1"}>
                      {categories.map((value) => (
                        <li
                          className={
                            "uppertitle uppertitle-2 bg-hatch rounded px-2"
                          }
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className={"body body-1"}>{work}</p>
                  <div>
                    <h3 className={"title title-5"}>Technologies</h3>
                    <ul className={"gap-2 flex flex-row flex-wrap mt-1"}>
                      {technologies.map((value) => (
                        <li
                          className={
                            "uppertitle uppertitle-2 bg-hatch rounded px-2"
                          }
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className={"title title-5 mt-5"}>Durée</h3>
                    <p className={"body body-1"}>{duration}</p>
                  </div>
                </div>
              </article>
            </>
          )
        )}
      </section>
    </>
  );
}
