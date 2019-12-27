import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import IconArrowThinRight from "../../content/assets/svgs/icon-arrow-thin-right-circle.svg";
import PostMetadata from "./PostMetadata"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___publicationDate], order: DESC }
      ) {
        edges {
          node {
            timeToRead
            excerpt
            fields {
              slug
            }
            frontmatter {
              publicationDate
              updateDate
              title
              description
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <section className="w-full md:w-7/12 px-4 mt-7 md:mt-0">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <Link to={node.fields.slug} key={node.fields.slug}>
            <article
              key={node.fields.slug}
              className="bg-white rounded-lg shadow p-7 mb-7"
            >
              <h1 className="title title-3">{title}</h1>
              <PostMetadata timeToRead={node.timeToRead} publicationDate={node.frontmatter.publicationDate} updateDate={node.frontmatter.publicationDate}/>
              <p
                className="body body-base"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
              <footer className="flex justify-end mt-4">
                <button className="btn btn-secondary move-right">
                  Lire l'article
                  <IconArrowThinRight className="fill-current w-6 h-full ml-2" />
                </button>
              </footer>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Posts;
