import React from "react";
import { graphql } from "gatsby";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Posts from "../components/Posts";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    console.log(process.env.NODE_ENV);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="flex flex-wrap justify-center -mx-4">
          <Seo title="All posts" />
          <Bio />
          <hr className="md:hidden w-full h-1 bg-gray-300 mt-7 border-0 rounded-lg"/>
          <Posts />
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
