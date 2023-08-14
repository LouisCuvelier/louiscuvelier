"use client";
import Link from "next/link";
import Profile from "public/images/profile.svg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const eyes = document.querySelectorAll(".profile_svg__yeux");

    window.addEventListener("mousemove", (e) => {
      // Récupérez les coordonnées de la souris
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Parcourez tous les éléments des yeux et ajustez leur position en fonction de la souris
      eyes.forEach((eye) => {
        // Récupérez les dimensions et positions de l'œil actuel par rapport à la fenêtre
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Calculez l'angle entre l'œil et la souris
        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);

        // Calculez la distance entre l'œil et la souris pour limiter la portée de mouvement
        const maxDistance = 4; // Ajustez la valeur selon votre préférence

        // Calculez la nouvelle position de l'œil
        const translateX = Math.cos(angle) * maxDistance;
        const translateY = Math.sin(angle) * maxDistance;

        // Appliquez la nouvelle position à l'œil en utilisant translate()
        eye.style.transform = `translate(${translateX}px, ${translateY}px)`;

        // Sélectionnez la pupille de l'œil actuel
        const pupil = eye.querySelector("path:last-of-type");

        // Calculez la position de la pupille en fonction du mouvement de l'œil
        const pupilX = (Math.cos(angle) + 1) * 1.2; // Remplacez 50 par la valeur qui contrôle la position de la pupille dans l'œil
        const pupilY = (Math.sin(angle) + 1) * 1.2; // Remplacez 50 par la valeur qui contrôle la position de la pupille dans l'œil

        // Appliquez la nouvelle position à la pupille en utilisant translate()
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    });
  });

  return (
    <>
      <section
        className={
          "max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 -mt-16 md:mt-0 gap-16 md:gap-16 items-center md:auto-rows-min md:py-32"
        }
      >
        <div className={"md:col-span-5"}>
          <Profile className={"w-6/12 md:w-10/12 mx-auto"} />
        </div>
        <div className={"md:col-span-7"}>
          <h1 className={"title title-1"}>Louis Cuvelier</h1>
          <h2 className={"title title-3 mt-2 mb-6"}>
            Front-end, automatisation et SEO
          </h2>
          <p className={"body body-1"}>
            Je suis un freelance passionné par le code et l'entrepreneuriat,
            avec une expertise en <strong>développement front-end</strong>,{" "}
            <strong>automatisation</strong> et <strong>SEO</strong>. Mon
            objectif est d'aider mes clients à atteindre leurs objectifs en
            créant des solutions sur mesure innovantes.
          </p>
          <div className={"mt-9 flex flex-wrap gap-8"}>
            <Link href={"/realisations"} className={"btn btn-primary"}>
              Voir mon travail
            </Link>
            <Link href={"/a-propos"} className={"btn btn-secondary"}>
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
