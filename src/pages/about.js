import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const JourneyGraph = styled.img `
  position: absoule;
  width: 100%;
`


const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>In some tables i’m the creative guy, in others the tech guy. In all of them an all around good, hard working guy.</h1>
        <p>My journey</p>        
        <JourneyGraph src={require('../images/journey-graph.svg')} alt="Graph of my journey so far"></JourneyGraph>
      </div>
    </div>
  </Layout>
)

export default AboutMe
