import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import Img from "gatsby-image/withIEPolyfill"
// Components made for the Cases pages, tweaks to the layout should be made there
import OtherProjects from '../components/OtherProjects'
import HeroImage from '../components/HeroImage'
import CasesSection from '../components/CasesSection'
// this is a temporary solution to displaying full width images, will update CasesSection
import styled from 'styled-components'

const FullWidthImg = styled.img`
  max-width: 100%;
`

export default ({data}) => (
    <Layout>
        <SEO title="Aruba" />
        <HeroImage> 
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Screens of the UI of the MUV App"
            />
        </HeroImage>

        <CasesSection>
            <h1>Admin panel for professionals of the beauty industry</h1>
            <h2>Project Overview</h2>
            <p>Aruba is a beauty service platform that helps connect professionals of the cosmetics and well being industry to new customers. They already had a design for a professional-sided dashboard but they had changed their logo, colors, typography, etc. And were also needing to turn their web dashboard into an app for professionals.</p>
                   
        </CasesSection>
        <CasesSection>
            <h2>My Contributions</h2>
            <p>My first task was to update every screen according to the new brand guidelines. In doing so I dedicated a lot of time organizing the Figma file into components, establishing text and color styles and also taking advantage of the variants feature of Figma when it suited. I also made adaptations of every screen into their mobile version, and then the adjustments necessary to be a hybrid app (it was going to be develop using Flutter so i took some time reading the documentation)</p>         

            <h2>First look</h2>
            <p>This is a sample of the overall look and feel of the platform at the beginning</p>           
        </CasesSection>

        <FullWidthImg src={require('../images/aruba-pantallas-al-empezar.png')} alt="What the panel looked like before"></FullWidthImg> 

        <CasesSection>
            <h2>Organizing the file a.k.a. making components</h2>
        </CasesSection>

        <FullWidthImg src={require('../images/aruba-components.png')} alt="Figma components"></FullWidthImg>

        <FullWidthImg src={require('../images/aruba-shapes.png')} alt="Some color shapes"></FullWidthImg>

        <CasesSection>
          <img src={require('../images/aruba-home-screen-web-and-app-mockup.png')} alt="Web and Phone mockup"></img>
        </CasesSection>

        <FullWidthImg src={require('../images/octogonal-view-of-screens.jpg')} alt="Home page"></FullWidthImg>

        <CasesSection>
          <img src={require('../images/aruba-profile.png')} alt="Profile page of the app"></img>
        </CasesSection>
        
        <CasesSection>
            <Button text="← Go Home" link="/" />
        </CasesSection>
        <OtherProjects 
            link1="/beta"
            text1="Bootstrapping a methodology-based startup"
            image1={require('../images/case-img-betacards.png')}

            link2="/devpost"
            text2="Researching how developers search for jobs"
            image2={require('../images/case-img-devpost.png')}
            
            link3="/sepsa"
            text3="Rethinking a web after rethinking a company"
            image3={require('../images/case-img-sepsa.png')}  

        />

    </Layout>
)

// This is a query that uses the plugin gatsby-iamge in order to optimize them
export const query = graphql`
  query {
    file(relativePath: { eq: "hero-case-img-aruba.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000 quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`