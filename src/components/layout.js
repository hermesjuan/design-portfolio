/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import staticdata from '../../staticdata.json'
import WorkTogether from "./WorkTogether"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <WorkTogether></WorkTogether>
          <div className="FooterMessage">
          {/* <!-- Thank you Stephen Dubner for this awesome message --> */}
            <h4>Take care, and if you can, someone else.</h4>
            <img src={require('../images/raised-hands.svg')}></img>            
          </div>
          <div className="SocialLinksGroup">
              {staticdata.cells.map(cell => (
                <a href={cell.url} target="_blank" class="SocialLinks">{cell.title}</a>
              ))}
            </div>
          Built by Hermes © {new Date().getFullYear()}, with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
