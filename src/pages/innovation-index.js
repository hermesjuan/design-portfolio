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


export default ({data}) => (
    <Layout>
        <SEO title="Inndex" />
        <HeroImage> 
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                objectFit="cover"
                objectPosition="50% 50%"
                alt="A screen of Inndex on an iPad"
            />
        </HeroImage>

        <CasesSection>
            <h1>Prototyping a tool that measures innovation</h1>
            <h2>Project Overview</h2>
            <p>Inndex is a tool that measures the potential of innovation within organizations. It takes a theoretical framework that analyzes four areas: people, purpose, platforms and processes. The analysis takes information from collaborators of the organization through some short test that are then processed and outputs a report.</p>
                   
        </CasesSection>
        <CasesSection>
            <h2>My Contributions</h2>
            <p>I was in charge of building the MVP using no code (a combination of Google Sheets, Typeform and Zapier) and, after some validations, with the design of the UI for a more custom platform.</p>         

            <h2>Description</h2>
            
            <p>The biggest challenge of this project was that I'm both the designer and client. Although there is a team behind this project, regarding UX I'm the one taking most of the decisions. This means that my job was to figure out what needs to be designed. I set two priorities at first: 1. Clean the steps a person would make from start to finish for a more streamlined experience and 2. Explore how the report would be shown in a clear way after some data has been collected.</p>
            
            <p>The MVP's User Journey had some unnecessary steps because of the technical limitations it had. Just to name two: The first step while using Inndex is to complete a form with information about the company. When it was completed the user received two separate emails with instructions; and also sharing the test's link with coworkers was a little confusing because it was a default email that wasn't always correctly addressed, especially when it was forwarded by one of the coworkers without giving proper context.</p>
            
            <p>After facilitating some sessions with the rest of the team we could identify some opportunities of improvement and started from there.</p>

            <img src={require('../images/inndex-1-steps-with-mvp.jpg')} alt="Ste by step of the mvp"></img>

            <p>A week later I came up with a proposal that tried to eliminate those unnecessary steps in order to have a more streamlined process, and taking advantage of the fact that we no longer have the constraints of the no-code MVP. (This was meant to be developed from the ground up)</p>

            <img src={require('../images/inndex-2-new-steps.jpg')} alt="Birdseye view of all the screens designed"></img>

            <p>Once we decided on some details I started designing each screen, and came up with this.</p>

            <img src={require('../images/inndex-3-all-screens.jpg')} alt="Birdseye view of all the screens designed"></img>

            <p>A home page that had a clear CTA in order to get started with the test, with an option to see an example of the results.</p>

            <img src={require('../images/inndex-4-home-page.jpg')} alt="Home page"></img>

            <p>After creating an account the user already has access to the dashboard. It's empty at first and shows a CTA to fill the organization's info and also a small message for validating the account.</p>

            <img src={require('../images/inndex-5-empty-dashboard.jpg')} alt="Home page"></img>

            <p>The info is completed through a form (this can eventually be just a profile that can be edited, but for this iteration it made more sense to keep the form since we had limited software development resources and that form was already implemented)</p>

            <img src={require('../images/inndex-6-org-form.jpg')} alt="Home page"></img>

            <p>Now it's time to share the test with coworkers. During our MVP experimentation we found two ways people seem to prefer doing this: Adding them one by one or sharing a link with them. (I thought that everyone would like to just have a link but it turns out this wasn't true)</p>

            <img src={require('../images/inndex-7-share-test.jpg')} alt="Home page"></img>

            <p>I gave some thought to the email invitation and came up with something short and simple that summarizes to the receiver of the email what's going on. This is one of the steps we expect to find more improvements because there may be differences between how companies of different fields understand what Inndex does, what they have to do and why.</p>

            <img src={require('../images/inndex-8-email.jpg')} alt="Home page"></img>

            <p>And finally the report. It consists of three parts: A summary at the top, the details of each area in the middle, and at the bottom some suggestions for next steps. It looks pretty straightforward but getting there was a challenge. I don't want to get too much into it because it enters in that theory I mentioned at the beginning and it may get a little messy.</p>

            <img src={require('../images/inndex-9-report.jpg')} alt="Home page"></img>
            
            <p>And that's it! This proved to be a really nice experience of the design a product from beginning to end. Although it's never finished I think this first version came up pretty good and hope to keep improving on it.</p>

            <p>The tools I used were Figma for all the wireframes and Mural for working on the User Journey with the rest of the team</p>
            
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
            
            link3="/aruba"
            text3="Admin panel for beauty proffesionals"
            image3={require('../images/case-img-aruba.png')}  

        />

    </Layout>
)

// This is a query that uses the plugin gatsby-iamge in order to optimize them
export const query = graphql`
  query {
    file(relativePath: { eq: "hero-case-img-inndex.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000 quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`