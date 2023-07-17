import Link from "next/link";
import Profile from "../public/images/profile.svg";

export default function Home() {
  return (
    <>
      <section
        className={"grid grid-cols-12 gap-16 items-center auto-rows-min"}
      >
        <div className={"col-span-5"}>
          <Profile className={""} />
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
