import Link from "next/link";
import CopyClipboard from "../../../components/CopyClipboard";

export default function Contact() {
  const socials = [
    { name: "Twitter", url: "https://twitter.com/LouisCuvelier_" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/louiscuvelier/" },
  ];
  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1 max-w-screen-md mx-auto"}>
          Besoin de mes services ?
        </h1>
        <h2 className={"caption caption-1 mt-4"}>
          Je réponds dans les 24h (ouvrables)
        </h2>
      </section>

      <section
        className={
          "max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24"
        }
      >
        <div>
          <h2 className={"title title-3 mb-3"}>E-mail</h2>
          <div className={"body body-1 flex items-center space-x-1"}>
            <Link
              href={"mailto:hello@louiscuvelier.com"}
              className={"link link-primary"}
            >
              hello@louiscuvelier.com
            </Link>
            <CopyClipboard copyText={"hello@louiscuvelier.com"} />
          </div>
        </div>
        <div>
          <h2 className={"title title-3 mb-3"}>Plateformes</h2>
          <div className={"body body-1 flex items-center space-x-2"}>
            <ul className={"space-y-2"}>
              <li>
                <Link
                  target={"_blank"}
                  href={"https://www.malt.fr/profile/louiscuvelier"}
                  className={"link link-primary"}
                >
                  Malt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className={"title title-3 mb-3"}>Réseaux sociaux</h2>
          <div className={"body body-1 flex items-start flex-col"}>
            <ul className={"space-y-2"}>
              {socials.map(({ name, url }) => (
                <li>
                  <Link
                    target={"_blank"}
                    href={url}
                    className={"link link-primary"}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={"md:col-span-3"}>
          <h2 className={"title title-3 mb-10"}>Ce que je ne peux pas faire</h2>
          <ul className={"body body-1 list list-ul"}>
            <li>Développer un site WordPress</li>
            <li>
              Projets que je ne peux pas mettre en avant sur mon site ou mes
              réseaux sociaux
            </li>
            <li>Développer un site où il faut supporter d'Internet Explorer</li>
          </ul>
        </div>
      </section>
    </>
  );
}
