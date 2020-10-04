import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Hero = styled.div `
  height: 430px;
  margin: 30px 50px;
  h1 {
    font-weight: 900;
    font-size: 52px;
    max-width: 800px;
    line-height: 1.1;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 42px;
    }
  }
`
const HeroGroup = styled.div `
  margin: 0 auto;
  max-width: 1000px;
  padding: 100px 0;
  position: relative;
`
const JourneyGraph = styled.img `
  width: 100%;
`
const Section = styled.div`
  margin: 50px auto;
  padding: 30px 50px;
  max-width: 1000px;
`


const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <Hero>
      <HeroGroup>
        <h1>In some tables i’m the creative guy, in others the tech guy. In all of them an all around good, hard working guy.</h1>
      </HeroGroup>
    </Hero>    
    <Section>
      <h3>My journey</h3>    
      <JourneyGraph src={require('../images/journey-graph.svg')} alt="Graph of my journey so far"/>
    </Section>
  </Layout>
)

export default AboutMe
