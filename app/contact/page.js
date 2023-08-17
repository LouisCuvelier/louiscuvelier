import Link from "next/link";
import CopyClipboard from "../../components/CopyClipboard";
import { contact } from "/data/contact";
import { openGraphImage } from "../shared-metadata";

const title = "Contact";
const description =
  "Prêt à donner vie à vos idées digitales ? Contactez-moi dès maintenant pour des solutions en développement front-end, automatisation et SEO. Ensemble, créons l'avenir de votre projet.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://louiscuvelier.com/contact",
    ...openGraphImage,
  },
  twitter: {
    title,
    description,
    ...openGraphImage,
  },
};

export default function Contact() {
  const { socials, platforms, emails } = contact;

  return (
    <>
      <section
        className={
          "border-hatch mx-auto mb-32 md:mb-40 max-w-screen-lg border-b-[10px] pb-16 md:pb-20"
        }
      >
        <h1 className={"title title-1"}>Besoin de mes services&nbsp;?</h1>
        <h2 className={"title title-3 mt-4"}>
          Contactez-moi, je vous réponds dans les 24h.
        </h2>
      </section>

      <section
        className={
          "max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-0"
        }
      >
        <div className={""}>
          <h2 className={"title title-4 mb-3"}>Réseaux</h2>
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
        <div className={""}>
          <h2 className={"title title-4 mb-3"}>Plateformes</h2>
          <div className={"body body-1 flex items-center space-x-2"}>
            <ul className={"space-y-2"}>
              {platforms.map(({ name, url }) => (
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
        <div className={""}>
          <h2 className={"title title-4 mb-3"}>E-mail</h2>
          <div className={"body body-1 flex items-center space-x-1"}>
            <ul className={"space-y-2"}>
              {emails.map(({ name, url }) => (
                <li className={"flex items-center"}>
                  <Link href={url} className={"link link-primary mr-1"}>
                    {name}
                  </Link>
                  <CopyClipboard copyText={name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
