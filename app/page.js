import Profile from "components/Profile";
import getMetadata from "lib/getMetadata";
import Link from "next/link";

const description =
  "Je code votre site, je le classe sur Google et j'automatise vos processus. Freelance passionné par le code et l'entrepreneuriat, je vous aide à atteindre vos objectifs avec des solutions sur-mesure.";
export const metadata = getMetadata({ url: "/", description });

export default function Home() {
  return (
    <>
      <section
        className={
          "max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 -mt-16 md:mt-0 gap-16 md:gap-16 items-center md:auto-rows-min"
        }
      >
        <div className={"md:col-span-5"}>
          <Profile />
        </div>
        <div className={"md:col-span-7"}>
          <h1 className={"title title-1"}>Louis Cuvelier</h1>
          <h2 className={"title title-4 mt-2 mb-6 [text-wrap:balance]"}>
            Je code votre site, je le classe sur Google et j'automatise vos
            process
          </h2>
          <p className={"body body-1"}>
            Freelance passionné par le code et l'entrepreneuriat, j'ai une
            expertise en <strong>création de site internet</strong>,{" "}
            <strong>référencement naturel (SEO)</strong> et{" "}
            <strong>automatisation</strong>. J'aide mes clients à gagner du
            temps, de l'argent et de la productivité en créant des solutions
            sur-mesure.
          </p>
          <div className={"mt-9 flex flex-wrap gap-8"}>
            <Link
              href={"https://calendly.com/louiscuvelier/intro"}
              target={"_blank"}
              rel="nofollow noopener noreferrer"
              className={"btn btn-primary"}
            >
              Commencer votre projet
            </Link>
            <Link href={"/realisations"} className={"btn btn-secondary"}>
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
