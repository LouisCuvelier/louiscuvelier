import React from "react";
import { Link } from "gatsby";
import IconHome from "../../content/assets/svgs/icon-home.svg";
import "../styles/global.css";
import Copyright from "./Copyright";

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <>
        <header
          className={`container mb-7 ${
            location.pathname === rootPath ? "" : "max-w-2xl mx-auto"
          }`}
        >
          <nav>
            <ul>
              <li>
                <Link
                  to={"/"}
                  title="Accueil"
                  className="btn btn-tertiary btn-icon"
                >
                  <IconHome className="w-6" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer>
          {location.pathname === rootPath ? (
            <Copyright classes={"text-right"} />
          ) : (
            <Copyright classes={"max-w-2xl text-right mx-auto"} />
          )}
        </footer>
      </>
    );
  }
}

export default Layout;
