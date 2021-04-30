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
            <h1>Designing a tool that measures innovation</h1>
            <h2>Project Overview</h2>
            <p>Inndex is a tool that measures the potential of innovation within organizations. It takes a theoretical framework that measures these four areas: people, purpose, platforms and processes. The analysis takes information from collaborators of the organization through some short test that are then combined and outputs an innovation report.</p>
                   
        </CasesSection>
        <CasesSection>
            <h2>My Contributions</h2>
            <p>I was in charge of building the MVP using no code (a combination of Google Sheets, Typeform and Zapier) and after some validations, with the designed of the UI for a more custom platform.</p>         

            <h2>Description</h2>
            
            <p>I find that the biggest challenge of this project is that I'm both the designer and client. I mean, there is a team around this project but regarding UX I'm the one taking most of the decisions. This means that my job wasn't just to execute the design of something previously agreed upon, but to figure out what needs to be design. I set two priorities for the first stage: 1. The overall step by step that a person would make from start to finish and 2. How the results would be shown.</p>
            
            <p>The MVP's User Journey had some unnecessary steps because of the technical limitations it had. Just to name two: The first step is to complete a form with information about the company, when it was sent the user received two separate emails with instructions; and also sharing the link to coworkers in order to take the test was a little confusing because it was a default email that wasn't always correctly addressed.</p>
            
            <p>After facilitating some sessions with the team we could identify some opportunities of improvement and started from there.</p>

            <img src={require('../images/inndex-1-steps-with-mvp.jpg')} alt="Ste by step of the mvp"></img>

            <p>A week later I came up with a proposal that tried to eliminate those unnecessary steps in order to have a more streamlined process, and taking advantage of the fact that we no longer have the constraints of the no-code MVP. (This was meant to be developed from the ground up)</p>

            <img src={require('../images/inndex-2-new-steps.jpg')} alt="Birdseye view of all the screens designed"></img>

            <p>Once we decided on some details I started designing each screen, and came up with this.</p>

            <img src={require('../images/inndex-3-all-screens.jpg')} alt="Birdseye view of all the screens designed"></img>

            <p>A home page that had a clear CTA (with the option to see a results demo) in order to get started with the test</p>

            <img src={require('../images/inndex-4-home-page.jpg')} alt="Home page"></img>

            <p>After creating an account the user already has access to the dashboard, that at first is empty with a CTA to fill the organization's info</p>

            <img src={require('../images/inndex-5-empty-dashboard.jpg')} alt="Home page"></img>

            <p>The info is completed through a form (this can eventually be just a profile that can be edited, but for this iteration it made more sense to keep the form since we had limited software development resources and that form was already implemented)</p>

            <img src={require('../images/inndex-6-org-form.jpg')} alt="Home page"></img>

            <p>Now it's time to share the test with coworkers. During our MVP tests we found two ways people seem to prefer doing this: Adding them one by one or sharing a link with them. (I thought that everyone would like to just have a link but it turns out this wasn't true)</p>

            <img src={require('../images/inndex-7-share-test.jpg')} alt="Home page"></img>

            <p>I gave some thought to the email invitation and came up with a short and simple that summarizes to the receiver of the email what's going on.</p>

            <img src={require('../images/inndex-8-email.jpg')} alt="Home page"></img>

            <p>And finally the report. It consists of three parts: A summary at the top, the details of each area in the middle, and at the bottom some suggestions of next steps. It looks pretty straightforward but getting there was a challenge. I don't want to get too much into it because it enters in that theory I mentioned at the beginning and it may get a little messy.</p>

            <img src={require('../images/inndex-9-report.jpg')} alt="Home page"></img>
            
            <p>And that's it! This process proved to be a really nice experience of designing a product from beginning to end. Although it's never finished I think this first version came up pretty good and hope to keep improving on it.</p>

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