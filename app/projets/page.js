import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
export default function Projects() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Projets</h1>
      </section>
      {/* Nom */}
      {/* Description */}
      {/*Technos*/}
      {/*Type de projet*/}
      <section>
        <h2>Bulneo</h2>
        <p>
          Bulneo est l'entreprise spécialiste de la rénovation de salle de bain.
          Du simple remplacement de baignoire par une douche en 48h jusqu'à la
          rénovation totale de la salle de bain en 5 jours, les travaux sont
          réalisés sans sous-traitance, avec des produits sur mesure, fabriqués
          en France et disposant d'une garantie étendue de 10 ans.
        </p>
        <p>
          Étant co-fondateur de Bulneo, j'ai pu avoir une grande liberté
          d'action. Ainsi, cela m'a permis de développer l'intégralité du site
          vitrine, mettre en place la stratégie SEO et SEA, créer tous les
          processus internes, automatiser un grand nombre d'actions, donner des
          formations et développer des outils customs, notamment sous Zoho.
        </p>
        <p>2019 à maintenant</p>
        <ul>
          <li>Craft CMS</li>
          <li>Tailwind CSS</li>
          <li>Alpine JS</li>
          <li>Twig</li>
          <li>Zoho</li>
          <li>SEO</li>
        </ul>
        <ul>
          <li>Site vitrine</li>
          <li>SEO</li>
          <li>Formation</li>
          <li>Automatisation</li>
        </ul>
        <Link
          href={"https://www.bulneo.fr"}
          className={"link link-primary"}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          Bulneo
        </Link>
      </section>
    </>
  );
}
