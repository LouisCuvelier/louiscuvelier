/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo(props) {
  const { description, lang, meta, image } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            socials {
              title
              handle
            }
            description
            author
            cover
          }
        }
      }
    `
  );
  const title = props.title || "";
  const seoTitle = title.trim()
    ? `${title} | ${site.siteMetadata.title}`
    : `${site.siteMetadata.title} | Bidouilleur professionnel de code et de design`;

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata.cover;
  const socials = site.siteMetadata.socials;
  const twitter = socials.find(element => element.title === "Twitter");

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      bodyAttributes={{
        class:
          "bg-gray-200 antialiased min-h-screen body body-md p-7 max-w-5xl mx-auto"
      }}
      title={seoTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: seoTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `og:image`,
          content: `${site.siteMetadata.siteUrl}${metaImage}`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: `@${twitter.handle}`
        },
        {
          name: `twitter:title`,
          content: seoTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:site`,
          content: `@${twitter.handle}`
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${metaImage}`
        }
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
  image: ``
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string
};

export default Seo;
