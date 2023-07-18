"use client";
import Image from "next/image";
import Clock from "../public/images/clock.svg";
import Link from "next/link";
import ArrowUpRight from "../public/images/arrow-up-right.svg";
import { useEffect } from "react";

export default function ProjectCard({
  index,
  id,
  client,
  description,
  website,
  categories,
  work,
  duration,
  technologies,
  cover,
}) {
  useEffect(() => {
    // Sélectionnez toutes les cartes avec la classe "projects"
    const projects = document.querySelectorAll(".projects");

    // Fonction pour effectuer l'inclinaison de la carte en fonction de la position de la souris
    function rotateToMouse(e) {
      const bounds = e.currentTarget.getBoundingClientRect(); // Récupérez les dimensions de la carte en utilisant getBoundingClientRect()
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      // Calculez l'inclinaison en fonction de la distance de la souris par rapport au centre de la carte
      const inclinationX = center.y / bounds.height;
      const inclinationY = -center.x / bounds.width;

      // Mettre à l'échelle et incliner la carte en fonction de la position de la souris
      e.currentTarget.style.transform = `
    scale3d(1.03, 1.03, 1.03)
    rotate3d(
      ${inclinationX},
      ${inclinationY},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
    }

    // Fonction pour gérer l'événement "mouseenter" (souris entre dans la carte)
    function handleMouseEnter(e) {
      // Ajoutez l'écouteur d'événement "mousemove" pour suivre la souris lorsque la souris est sur la carte
      e.currentTarget.addEventListener("mousemove", rotateToMouse);
    }

    // Fonction pour gérer l'événement "mouseleave" (souris quitte la carte)
    function handleMouseLeave(e) {
      // Supprimez l'écouteur d'événement "mousemove" pour arrêter de suivre la souris lorsque la souris quitte la carte
      e.currentTarget.removeEventListener("mousemove", rotateToMouse);
      // Réinitialisez la transformation de la carte à sa position d'origine
      e.currentTarget.style.transform = "";
    }

    // Ajoutez les écouteurs d'événement pour chaque carte avec la classe "projects"
    projects.forEach((project) => {
      // Lorsque la souris entre dans la carte, appelez handleMouseEnter
      project.addEventListener("mouseenter", handleMouseEnter);
      // Lorsque la souris quitte la carte, appelez handleMouseLeave
      project.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <article
      key={index}
      className={
        "projects border-hatch @container border-[12px] rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out"
      }
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
            <div className={"flex justify-between items-stretch mb-14"}>
              <div>
                <div className={"uppertitle uppertitle-2 flex text-slate-500"}>
                  <Clock className={"mr-2 h-5 w-5"} />
                  {duration}
                </div>
                <h2 className={"title title-2 mt-8 mb-4"}>{client}</h2>
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
              <p className={"subtitle subtitle-2 mb-14 @lg:mb-0"}>{work}</p>
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
  );
}
