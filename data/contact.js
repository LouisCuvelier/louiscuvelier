import TwitterIcon from "/public/images/twitter.svg";
import MaltIcon from "/public/images/malt.svg";
import LinkedInIcon from "/public/images/linkedin.svg";
import GitHub from "/public/images/github.svg";

export const contact = {
  socials: [
    {
      name: "Twitter",
      url: "https://twitter.com/LouisCuvelier_",
      icon: <TwitterIcon />,
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
