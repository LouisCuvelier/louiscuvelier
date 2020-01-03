import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="404: Not Found" />
        <div className={"flex flex-col items-center"}>
          <h1 className={"title title-1"}>Oups ... page introuvable</h1>
          <div className={"mb-10 mt-7"}>
            <a className={"btn btn-primary"} href={"/"}>
              Revenir à l'accueil
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
