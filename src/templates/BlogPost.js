import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostMetadata from "../components/PostMetadata";
import IconArrowThinRight from "../../content/assets/svgs/icon-arrow-thin-right-circle.svg";
import IconArrowThinLeft from "../../content/assets/svgs/icon-arrow-thin-left-circle.svg";
import Copyright from "../components/Copyright";

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
        />
        <article className="max-w-3xl body body-lg mx-auto -mt-2">
          <div className="max-w-2xl mx-auto">
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
            <div className="my-10 bg-white rounded-lg shadow p-7">
              <div className="label label-lg mb-5">Sommaire</div>
              <div
                className="toc title title-6"
                dangerouslySetInnerHTML={{ __html: toc }}
              />
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className={"external-link"}
          />
        </article>

        <div className="mx-auto max-w-3xl p-7 bg-white rounded-lg shadow mt-10 mb-7">
          <ul className="-mx-7 flex flex-wrap flex-col sm:flex-row justify-between">
            <li className="px-7 w-1/2">
              {previous && (
                <>
                  <div className="label label-base mb-2">Article précédent</div>
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    className="title title-6 move-left btn btn-secondary"
                  >
                    <IconArrowThinLeft className="fill-current w-6 h-full mr-2" />
                    {previous.frontmatter.title}
                  </Link>
                </>
              )}
            </li>
            <li className="px-7 w-1/2 mt-7 sm:mt-0 ">
              {next && (
                <>
                  <div className="label label-base sm:text-right mb-2">
                    Article suivant
                  </div>
                  <Link
                    to={next.fields.slug}
                    rel="next"
                    className="title title-6 move-right btn btn-secondary"
                  >
                    {next.frontmatter.title}
                    <IconArrowThinRight className="fill-current w-6 h-full ml-2" />
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
        description
        updateDate
        publicationDate
        description
      }
    }
  }
`;
