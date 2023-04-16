import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/images/profile.jpeg";
import Layout from "../components/layouts/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head></Head>
      <Layout style={"h-screen flex flex-col justify-between"}>
        <section className={"grid grid-cols-12 gap-16"}>
          <div className={"col-span-5"}>
            <Image src={profilePic} />
          </div>
          <div className={"col-span-7"}>
            <h1 className={"font-sans text-7xl"}>Louis Cuvelier</h1>
            <h2 className={"font-sans text-4xl mt-2 mb-6"}>
              Bidouilleur freelance de code et de design
            </h2>
            <p className={"text-xl"}>
              Je suis développeur front end, expert SEO et amoureux du pixel
              perfect. Je peux vous accompagner sur le design, le développement
              et le classement SEO de votre site web.
            </p>
            <div className={"mt-9"}>
              <Link href={"/"} className={"btn btn-primary"}>
                <span>Voir mon travail</span>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
