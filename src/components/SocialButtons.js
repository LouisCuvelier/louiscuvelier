import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import IconMail from "../../content/assets/svgs/icon-mail.svg"

class SocialButtons extends React.Component {
  render() {
    return (
      <StaticQuery
        query={socialQuery}
        render={data => {
          const { socials } = data.site.siteMetadata
          return (
            <>
              <ul className="flex">
                {socials.map((social, index) => {
                  let icon
                  let element

                  if (social.title === "Email") {
                    icon = <IconMail className="fill-current w-5 h-full" />

                    element = (
                      <button className="btn btn-secondary btn-icon">
                        {icon}
                      </button>
                    )
                  } else {
                    let iconRef

                    switch (social.title) {
                      case "LinkedIn":
                        iconRef = faLinkedinIn
                        break
                      default:
                        iconRef = faTwitter
                        break
                    }

                    element = (
                      <a
                        href={social.url}
                        title={social.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-icon"
                      >
                        <FontAwesomeIcon
                          icon={iconRef}
                        />
                      </a>
                    )
                  }
                  return (
                    <li key={index} className="mr-2 flex">
                      {element}
                    </li>
                  )
                })}
              </ul>
            </>
          )
        }}
      />
    )
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
`

export default SocialButtons
