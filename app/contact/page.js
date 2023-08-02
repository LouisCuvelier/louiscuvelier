// https://www.malt.fr/profile/louiscuvelier
import Link from "next/link";
import CopyClipboard from "../../components/CopyClipboard";

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

      <section className={""}>
        <div>
          <h2 className={"title title-4"}>E-mail</h2>
          <div className={"flex items-center space-x-2"}>
            <Link
              href={"mailto:hello@louiscuvelier.com"}
              className={"subtitle subtitle-2"}
            >
              hello@louiscuvelier.com
            </Link>
            <CopyClipboard copyText={"hello@louiscuvelier.com"} />
          </div>
        </div>
        <div>
          <h2 className={"title title-4"}>Réseaux sociaux</h2>
          <div className={"flex items-center space-x-2"}>
            <Link
              href={"mailto:hello@louiscuvelier.com"}
              className={"subtitle subtitle-2"}
            >
              hello@louiscuvelier.com
            </Link>
            <CopyClipboard copyText={"hello@louiscuvelier.com"} />
          </div>
        </div>
      </section>
    </>
  );
}
