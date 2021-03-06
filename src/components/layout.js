import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
            <Link className="header-link-home" to="/">
              {title}
            </Link>
          )}
      </header>

      <main>{children}</main>

      <script>console.log('process.env', process.env)</script>

      <body>
        <script src="/__/firebase/8.2.10/firebase-app.js"></script>
        <script src="/__/firebase/8.2.10/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </footer>
      </body>
    </div>
  )
}

export default Layout
