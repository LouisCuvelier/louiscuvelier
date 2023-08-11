import Link from "next/link";
import CopyClipboard from "../../../components/CopyClipboard";

export default function Contact() {
  const socials = [
    { name: "Twitter", url: "", icon: "" },
    { name: "LinkedIn", url: "", icon: "" },
  ];
  return (
    <>
      <section className={"text-center mb-32"}>
        <h1 className={"title title-1"}>Contact</h1>
      </section>

      <section
        className={
          "max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24"
        }
      >
        <div>
          <h2 className={"title title-3 mb-3"}>E-mail</h2>
          <div className={"body body-1 flex items-center space-x-2"}>
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
            <Link
              target={"_blank"}
              href={"https://www.malt.fr/profile/louiscuvelier"}
              className={"link link-primary"}
            >
              Malt
            </Link>
          </div>
        </div>
        <div>
          <h2 className={"title title-3 mb-3"}>Réseaux sociaux</h2>
          <div className={"body body-1 flex items-start space-y-2 flex-col"}>
            <div>
              <Link
                target={"_blank"}
                href={"https://twitter.com/LouisCuvelier_"}
                className={"link link-primary"}
              >
                Twitter
              </Link>
            </div>
            <div>
              <Link
                target={"_blank"}
                href={"https://www.linkedin.com/in/louiscuvelier/"}
                className={"link link-primary"}
              >
                LinkedIn
              </Link>
            </div>
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
