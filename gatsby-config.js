module.exports = {
  siteMetadata: {
    title: `Louis Cuvelier`,
    author: `Louis Cuvelier`,
    description: `Bidouilleur professionnel de code et de design `,
    siteUrl: `https://www.louiscuvelier.com/`,
    cover: `/assets/images/cover.png`,
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
              withWebp: true,
              quality: 80
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
                className: "cw-h2"
              },
              h3: {
                className: "cw-h3"
              },
              h4: {
                className: "cw-h4"
              },
              h5: {
                className: "cw-h5"
              },
              h6: {
                className: "cw-h6"
              },
              p: {
                className: "cw-p"
              },
              list: {
                className: "cw-lists"
              },
              blockquote: {
                className: "cw-quote"
              },
              a: {
                className: "cw-link"
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
              icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="fill-current text-indigo-300" d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"/><path class="fill-current text-indigo-500" d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"/></svg>`,
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
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-78514805-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        cookieExpires: 33696000,
        transport: "beacon",
        forceSSL: true
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl;
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at overreacted.io. You can read it online by <a href="${siteUrl +
                  edge.node.fields.slug}">clicking here</a>.)</div>
              `;

                let html = edge.node.html;
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.publicationDate,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": html + postText }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___publicationDate] }
                ) {
                  edges {
                    node {
                      html
                      excerpt(pruneLength: 160)
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        description
                        publicationDate
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Flux RSS de Louis Cuvelier"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Louis Cuvelier`,
        short_name: `Louis Cuvelier`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#A3BFFA`,
        display: `minimal-ui`,
        icon: `content/assets/images/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
