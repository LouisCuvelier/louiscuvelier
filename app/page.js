import Profile from "components/atoms/Profile";
import getMetadata from "utils/getMetadata";
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
          <h2 className={"title title-4 mt-2 mb-6 text-balance"}>
            Co-fondateur de Subrequest et développeur front-end sénior
          </h2>
          <p className={"body body-1"}>
            J'ai co-fondé Subrequest, l'agence de développement web qui délivre
            sans exploser votre budget, et j'interviens en tant que développeur
            front-end senior.
          </p>
          <div className={"mt-9 flex flex-wrap gap-8"}>
            <Link href={"https://subrequest.com"} className={"btn btn-primary"}>
              Faire appel à Subrequest
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
