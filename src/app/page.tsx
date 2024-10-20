import { Profile } from "@/components/atoms/Profile";
import { Heading } from "@/components/atoms/Heading";
import Link from "next/link";
import SvgX from "@/assets/svgs/__generated__/X";
import SvgGithub from "@/assets/svgs/__generated__/Github";
import SvgLinkedin from "@/assets/svgs/__generated__/Linkedin";
import { Button } from "@/components/atoms/Button";

const socials = [
  {
    name: "X",
    url: "https://twitter.com/LouisCuvelier_",
    icon: <SvgX />,
  },
  {
    name: "GitHub",
    url: "https://github.com/LouisCuvelier",
    icon: <SvgGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/louiscuvelier/",
    icon: <SvgLinkedin />,
  },
];

export default function Home() {
  return (
    <main
      className={
        "h-dvh container items-start lg:items-center flex justify-center gap-14 lg:flex-row flex-col py-9"
      }
    >
      <Profile
        className={
          "max-w-md max-h-96 lg:max-h-none relative z-10 motion-preset-blur-down-lg motion-duration-1000 motion-preset-slide-down lg:motion-preset-slide-up"
        }
      />
      <div
        className={
          "flex flex-col gap-1 motion-preset-blur-down-lg motion-duration-1000 motion-preset-slide-up lg:motion-preset-slide-down"
        }
      >
        <Heading>Louis Cuvelier.</Heading>
        <Heading as={"h2"} size={"4"}>
          Co-Founder & Web Engineer at{" "}
          <Link
            href={"https://subrequest.com"}
            className={"underline hover:text-primary-background transition"}
          >
            Subrequest
          </Link>
          .
        </Heading>
        <ul className={"flex items-center gap-2"}>
          {socials.map((social) => (
            <Button
              size={"lg"}
              key={social.name}
              variant={"ghost"}
              iconBefore={social.icon}
              as={"nextLink"}
              href={social.url}
              hideText={true}
            >
              {social.url}
            </Button>
          ))}
        </ul>
      </div>
    </main>
  );
}
