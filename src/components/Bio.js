/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import IconExternalWindow from "../../content/assets/svgs/icon-external-window.svg";
import SocialButtons from "./SocialButtons";

const currentProjects = [
  {
    title: "Bulneo",
    url: "https://www.bulneo.fr"
  },
  {
    title: "Coursier Job",
    url: "https://www.coursierjob.com"
  }
];

const previousProjects = [
  { title: "Taskalog", url: "https://www.taskalog.com" },
  {
    title: "Bonne Dose",
    url: "https://www.louiscuvelier.com/dose-finale/"
  }
];

function renderProjects(projects) {
  return projects.map((project, index) => {
    return (
      <li className="mt-3" key={index}>
        {project.url.includes("www.louiscuvelier.com") ? (
          <a
            href={`${project.url}`}
            className="btn btn-secondary inline-flex items-center move-up-right"
          >
            {project.title}
          </a>
        ) : (
          <a
            href={`${project.url}/?utm_source=louiscuvelier.com`}
            className="btn btn-secondary inline-flex items-center move-up-right"
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.title}
            <IconExternalWindow className="w-5 inline-flex ml-2 fill-current" />
          </a>
        )}

      </li>
    );
  });
}

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <aside className="w-full md:w-5/12 px-4">
            <div className="sticky top-5">
              <div className="bg-white rounded-lg shadow p-7 bar bar-up">
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row">
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author}
                    className="rounded-full shadow-lg"
                    style={{ minWidth: "128px" }}
                  />
                  <div className="flex flex-col justify-end ml-0 sm:ml-5 md:ml-0 lg:ml-5 mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                    <h1 className="title title-2">Louis Cuvelier</h1>
                    <div className="mt-5">
                      <SocialButtons />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="label label-md mb-2">À propos</h2>
                  <p className="body body-base">
                    Entrepreneur et étudiant en 5ème année à Ingésup Bordeaux.
                  </p>
                  <p className="body body-base mt-4">
                    Passionné par l’entrepreneuriat, tout en étant amoureux du
                    web, de l’informatique et du design, j'aime mettre sur pieds
                    des projets de A&nbsp;à&nbsp;Z.
                  </p>
                </div>
                <div className="mt-8">
                  <h2 className="label label-md mb-2">Actuellement</h2>
                  <ul>{renderProjects(currentProjects)}</ul>
                </div>
                <div className="mt-8">
                  <h2 className="label label-md mb-2">Précédemment</h2>
                  <ul>{renderProjects(previousProjects)}</ul>
                </div>
              </div>
            </div>
          </aside>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "images/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 128, height: 128, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
