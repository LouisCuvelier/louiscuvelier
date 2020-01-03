import React from "react";
import { StaticQuery, graphql } from "gatsby";
import IconMail from "../../content/assets/svgs/icon-mail.svg";
import IconTwitter from "../../content/assets/svgs/icon-twitter.svg";
import IconLinkedIn from "../../content/assets/svgs/icon-linkedin.svg";

class SocialButtons extends React.Component {
  render() {
    return (
      <StaticQuery
        query={socialQuery}
        render={data => {
          const { socials } = data.site.siteMetadata;
          return (
            <>
              <ul className="flex">
                {socials.map((social, index) => {
                  let icon;
                  let element;

                  if (social.title === "Email") {
                    icon = <IconMail className="fill-current w-5 h-full" />;

                    element = (
                      <button className="btn btn-secondary btn-icon">
                        {icon}
                      </button>
                    );
                  } else {
                    if (social.title === "LinkedIn") {
                      icon = (
                        <IconLinkedIn className="fill-current w-5 h-full" />
                      );
                    } else {
                      icon = (
                        <IconTwitter className="fill-current w-5 h-full" />
                      );
                    }

                    element = (
                      <a
                        href={social.url}
                        title={social.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-icon"
                      >
                        {icon}
                      </a>
                    );
                  }
                  return (
                    <li key={index} className="mr-2 flex">
                      {element}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        }}
      />
    );
  }
}

const socialQuery = graphql`
  query socialQuery {
    site {
      siteMetadata {
        socials {
          url
          title
          handle
        }
      }
    }
  }
`;

export default SocialButtons;
