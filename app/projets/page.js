import Link from "next/link";
import { getSortedProjectsData } from "../../lib/projects";
import Image from "next/image";
import ArrowUpRight from "../../public/images/arrow-up-right.svg";
import Clock from "../../public/images/clock.svg";
export default function Projects() {
  const allProjectsData = getSortedProjectsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Projets</h1>
      </section>

      <section className={"flex flex-col gap-16 mx-auto"}>
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
              cover,
            },
            index
          ) => (
            <>
              <article
                key={id}
                className={"border-hatch @container border-[12px] rounded"}
              >
                <div className={"w-full relative"}>
                  <Image
                    src={cover}
                    className={"rounded-t"}
                    width={5312}
                    height={2724}
                    alt={`Image de couverture de ${client}`}
                  />
                  <ul
                    className={
                      "absolute right-12 bottom-12 z-10 gap-2 flex flex-row flex-wrap mt-1"
                    }
                  >
                    {categories.map((value, index) => (
                      <li
                        key={index}
                        className={
                          "uppertitle uppertitle-2 bg-hatch-secondary shadow-blue-950 rounded pl-3 pr-2 py-1 bg-blue-100/50 text-white shadow-xl"
                        }
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={"p-14"}>
                  <div className={"@xl:gap-14 @xl:grid @xl:grid-cols-2"}>
                    <div>
                      <div
                        className={"flex justify-between items-stretch mb-14"}
                      >
                        <div>
                          <div
                            className={
                              "uppertitle uppertitle-2 flex text-slate-500"
                            }
                          >
                            <Clock className={"mr-2 h-5 w-5"} />
                            {duration}
                          </div>
                          <h2 className={"title title-2 mt-8 mb-4"}>
                            {client}
                          </h2>
                          <Link
                            href={website}
                            className={"btn btn-tertiary"}
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                          >
                            <span>Voir le projet</span>
                            <ArrowUpRight />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <p className={"subtitle subtitle-2 mb-14 @lg:mb-0"}>
                          {work}
                        </p>
                      </div>
                    </div>

                    <div className={"mt-16 space-y-8 self-end"}>
                      <div>
                        <h3 className={"title title-4 mb-3"}>Client</h3>
                        <p className={"body body-1"}>{description}</p>
                      </div>
                      <div>
                        <h3 className={"title title-4 mb-3"}>Technologies</h3>
                        <ul className={"gap-2 flex flex-row flex-wrap mt-1"}>
                          {technologies.map((value, index) => (
                            <li
                              key={index}
                              className={
                                "uppertitle uppertitle-2 bg-hatch-secondary rounded pl-2 pr-1"
                              }
                            >
                              {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
