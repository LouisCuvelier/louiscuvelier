import XIcon from "/public/assets/images/twitter.svg";
import MaltIcon from "/src/assets/svgs/source/malt.svg";
import LinkedInIcon from "/src/assets/svgs/source/linkedin.svg";
import GitHub from "/src/assets/svgs/source/github.svg";

export const contact = {
  socials: [
    {
      name: "X",
      url: "https://twitter.com/LouisCuvelier_",
      icon: <XIcon />,
    },
    {
      name: "GitHub",
      url: "https://github.com/LouisCuvelier",
      icon: <GitHub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/louiscuvelier/",
      icon: <LinkedInIcon />,
    },
  ],
  platforms: [
    {
      name: "Malt",
      url: "https://www.malt.fr/profile/louiscuvelier",
      icon: <MaltIcon />,
    },
  ],
  emails: [
    {
      name: "hello@louiscuvelier.com",
      url: "mailto:hello@louiscuvelier.com",
      icon: "",
    },
  ],
};
