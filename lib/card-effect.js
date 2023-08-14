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

export default function cardEffect(elementsClass) {
  // Sélectionnez toutes les cartes avec la classe "cards"
  const cards = document.querySelectorAll(elementsClass);

  // Ajoutez les écouteurs d'événement pour chaque carte avec la classe "cards"
  cards.forEach((card) => {
    // Lorsque la souris entre dans la carte, appelez handleMouseEnter
    card.addEventListener("mouseenter", handleMouseEnter);
    // Lorsque la souris quitte la carte, appelez handleMouseLeave
    card.addEventListener("mouseleave", handleMouseLeave);
  });
}
