import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Hero = styled.div `
  height: 460px;
  margin: 30px 50px;
  h1 {
    font-weight: 900;
    font-size: 52px;
    max-width: 800px;
    line-height: 1.1;
  }
`
const HeroGroup = styled.div `
  margin: 0 auto;
  max-width: 1000px;
  padding: 100px 0;
  position: relative;
`
const JourneyGraph = styled.div `
  /* position: absoule; */
  width: 100%;
  height: 740px;
  margin: 30px 50px;
  img {
    margin: 0 28px;
  }
`

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <Hero>
      <HeroGroup>
        <h1>In some tables i’m the creative guy, in others the tech guy. In all of them an all around good, hard working guy.</h1>
        <p>My journey</p>    
      </HeroGroup>
    </Hero>    
    <JourneyGraph><img src={require('../images/journey-graph.svg')} alt="Graph of my journey so far"/> </JourneyGraph>
  </Layout>
)

export default AboutMe
