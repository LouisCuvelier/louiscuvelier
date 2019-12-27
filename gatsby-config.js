module.exports = {
  siteMetadata: {
    title: `Louis Cuvelier`,
    author: `Louis Cuvelier`,
    description: `Entrepreneur`,
    siteUrl: `https://www.louiscuvelier.com/`,
    socials: [
      {
        title: "Twitter",
        handle: "LouisCuvelier_",
        url: "https://twitter.com/LouisCuvelier_"
      },
      {
        title: "LinkedIn",
        handle: "louiscuvelier",
        url: "https://www.linkedin.com/in/louiscuvelier/"
      },
      {
        title: "Email",
        handle: "hello@louiscuvelier.com"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/content/assets/svgs/`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              maxWidth: 768,
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-default-html-attrs`,
            options: {
              h2: {
                className:
                  "relative max-w-2xl mx-auto title title-2 mb-5 mt-10 flex items-center"
              },
              h3: {
                className:
                  "relative max-w-2xl mx-auto title title-3 mb-5 mt-10 flex items-center"
              },
              h4: {
                className:
                  "relative max-w-2xl mx-auto title title-4 mb-5 mt-10 flex items-center"
              },
              h5: {
                className:
                  "relative max-w-2xl mx-auto title title-5 mb-5 mt-10 flex items-center"
              },
              h6: {
                className:
                  "relative max-w-2xl mx-auto title title-6 mb-5 mt-10 flex items-center"
              },
              p: {
                className: "max-w-2xl body body-md mx-auto mb-8"
              },
              list: {
                className:
                  "max-w-2xl mx-auto list-outside body body-md list-disc mb-8 -mt-7"
              },
              a: {
                className: "link"
              },
              strong: {
                className: "font-bold"
              },
              em: {
                className: "italic"
              }
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-link"><path class="text-gray-700" d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"/><path class="text-gray-800" d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"/></svg>`,
              className: `anchor`,
              maintainCase: false,
              removeAccents: true
            }
          },
          {
            resolve: "gatsby-remark-relative-links",
            options: {
              domainRegex: /http[s]*:\/\/[www.]*louiscuvelier\.com[/]?/
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
