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
            <img src={require('../images/raised-hands.svg')} alt=""></img>
          </div>
          <div className="SocialLinksGroup">
            <a href="https://www.linkedin.com/in/hermesjuan/" target="_blank" className="SocialLinks" rel="noreferrer">
              <img src={require('../images/linkedin-logo.svg')} alt="LinkedIn"></img>
            </a>
            <a href="https://www.instagram.com/hermesgrafia/" target="_blank" className="SocialLinks" rel="noreferrer">
              <img src={require('../images/instagram-logo.svg')} alt="Instagram"></img>
            </a>
            <a href="https://www.behance.net/hermesjuan" target="_blank" className="SocialLinks" rel="noreferrer">
              <img src={require('../images/behance-logo.svg')} alt="Behance"></img>
            </a>
          </div>
          <a href="https://github.com/hermesjuan/design-portfolio" target="_blank">Built</a> by me © {new Date().getFullYear()}
          
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
