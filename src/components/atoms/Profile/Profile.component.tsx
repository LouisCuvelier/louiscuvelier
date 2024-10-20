"use client";
import { cn } from "@/utils/classNames.utils";
import { ProfileProps } from "./Profile.types";
import { useEffect } from "react";
import SvgProfile from "@/assets/svgs/__generated__/Profile";

function Profile({ className = "", id, nativeProps }: ProfileProps) {
  useEffect(() => {
    const eyes = document.querySelectorAll(
      ".profile_svg__yeux",
    ) as NodeListOf<HTMLElement>;

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
        const pupil = eye.querySelector("path:last-of-type") as HTMLElement;

        // Calculez la position de la pupille en fonction du mouvement de l'œil
        const pupilX = (Math.cos(angle) + 1) * 1.2; // Remplacez 50 par la valeur qui contrôle la position de la pupille dans l'œil
        const pupilY = (Math.sin(angle) + 1) * 1.2; // Remplacez 50 par la valeur qui contrôle la position de la pupille dans l'œil

        // Appliquez la nouvelle position à la pupille en utilisant translate()
        if (pupil) {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    });
  });

  return (
    <SvgProfile
      {...nativeProps}
      {...(id && { id })}
      className={cn("", className)}
    />
  );
}

Profile.displayName = "Profile";

export default Profile;
