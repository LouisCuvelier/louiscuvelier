import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostMetadata from "../components/PostMetadata";
import IconArrowThinRight from "../../content/assets/svgs/icon-arrow-thin-right-circle.svg";
import IconArrowThinLeft from "../../content/assets/svgs/icon-arrow-thin-left-circle.svg";
import IconDiscuss from "../../content/assets/svgs/icon-chat-group.svg";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const toc = post.tableOfContents;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, slug } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        pageTitle={post.frontmatter.title}
        pageSlug={slug}
      >
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image.publicURL}
        />
        <article className="max-w-3xl body body-lg mx-auto -mt-2">
          <div className="mx-auto max-w-2xl">
            <h1 className="title title-1 mb-3">{post.frontmatter.title}</h1>
            <PostMetadata
              timeToRead={post.timeToRead}
              publicationDate={post.frontmatter.publicationDate}
              updateDate={post.frontmatter.updateDate}
            />
            {post.frontmatter.description && (
              <p
                className="body body-lg mb-8"
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description
                }}
              />
            )}
          </div>
          <div className="max-w-3xl my-10 bg-white rounded-lg shadow p-7 bar bar-up">
            <div className="label label-lg mb-5">Sommaire</div>
            <div
              className="toc title title-6"
              dangerouslySetInnerHTML={{ __html: toc }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className={"cw-external-link"}
          />
        </article>

        <aside className={"max-w-2xl mx-auto my-11"}>
          <a
            className="btn btn-primary inline-flex items-center move-up-right"
            href={`https://twitter.com/search?q=${encodeURIComponent(
              this.props.data.site.siteMetadata.siteUrl + slug
            )}`}
          >
            Échanger sur Twitter
            <IconDiscuss className="w-6 inline-flex ml-2 fill-current" />
          </a>
        </aside>

        <div className="mx-auto max-w-3xl p-7 bg-white rounded-lg shadow mt-10 mb-7 bar bar-up">
          <ul className="-mx-7 flex flex-wrap flex-col sm:flex-row justify-between items-start">
            <li className="px-7 w-full md:w-1/2">
              {previous && (
                <>
                  <div className="label label-base mb-3">Article précédent</div>
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    className="move-left flex flex-col items-start btn btn-secondary text-xl text-left rounded-lg p-5"
                  >
                    {previous.frontmatter.title}
                    <IconArrowThinLeft className="fill-current w-7 mt-3" />
                  </Link>
                </>
              )}
            </li>
            <li className="px-7 w-full md:w-1/2 mt-7 md:mt-0 ">
              {next && (
                <>
                  <div className="label label-base mb-3">Article suivant</div>
                  <Link
                    to={next.fields.slug}
                    rel="next"
                    className="move-right flex flex-col items-start btn btn-secondary text-xl text-left rounded-lg p-5"
                  >
                    {next.frontmatter.title}
                    <IconArrowThinRight className="fill-current w-7 mt-3 ml-auto" />
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        image {
          publicURL
        }
        description
        updateDate
        publicationDate
        description
      }
    }
  }
`;
