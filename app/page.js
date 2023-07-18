"use client";
import Link from "next/link";
import Profile from "../public/images/profile.svg";
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
        className={"grid grid-cols-12 gap-16 items-center auto-rows-min"}
      >
        <div className={"col-span-5"}>
          <Profile className={"w-10/12 mx-auto"} />
        </div>
        <div className={"col-span-7"}>
          <h1 className={"title title-2"}>Louis Cuvelier</h1>
          <h2 className={"title title-3 mt-2 mb-6"}>
            Bidouilleur freelance de code et de design
          </h2>
          <p className={"body body-1"}>
            Je suis développeur front end, expert SEO et amoureux du pixel
            perfect. Je peux vous accompagner sur le design, le développement et
            le classement SEO de votre site web.
          </p>
          <div className={"mt-9"}>
            <Link href={"/"} className={"btn btn-primary"}>
              Voir mon travail
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
