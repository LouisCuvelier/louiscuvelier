"use client";
import { createElement, useId } from "react";

export default function CardEffect(props) {
  const { as = "div", children, ...rest } = props;
  const id = useId();

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
    scale3d(1.02, 1.02, 1.02)
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

  return createElement(
    as,
    {
      ...rest,
      id: id,
      className: `border-hatch border-[12px] rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out ${rest.className}`,
      onMouseEnter: (e) => handleMouseEnter(e),
      onMouseLeave: (e) => handleMouseLeave(e),
    },
    children
  );
}
