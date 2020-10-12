import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import OtherProjects from '../components/OtherProjects'
// import HeroImage from '../components/HeroImage'
import CasesSection from '../components/CasesSection'
import styled from 'styled-components'
import Img from "gatsby-image/withIEPolyfill"

// Changing from img to div
const HeroImage = styled.div ` 
    img {
        width: 100%;
        height: auto;
        max-height: 700px;
    }
    @media (max-width: 640px) {
        img { height: 300px; }
    }
`

export default ({data}) => (
    <Layout>
        <SEO title="MUV" />
        <HeroImage> 
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Screens of the UI of the MUV App"
            />
            {/* <img src={require('../images/hero-case-img-muv.jpg')} alt="Mockup of MUV's app screen"/> */}
        </HeroImage>

        <CasesSection>
            <h1>Creating the MVP of the first ride-sharing app of Paraguay</h1>
            <h2>Project Overview</h2>
            <p>MUV is a ride-sharing app born in Paraguay before Uber was available. When the project was just beginning i was part of a team of consultants that had the goal of articulate an MVP so the idea could be tested and visualize the biggest challenges.</p>
            
            <p>This project was incubated by miut.company, an innovation laboratory based in Paraguay, which i co-founded. I was personally the project leader for the first 2 years fo Betacards. We focused on perfecting the product (methodology + experience + design) and also iterating business models so it can scale to LatAm, and then the rest of the world.</p>            
        </CasesSection>
        <CasesSection>
            <h2>My Contributions</h2>
            <p>I was in charge of the initial branding and the design of the first screens. One constraint was that they were using a template for the app so from a UX perspective i didn't have much to change in the interactions, and which screens, so it was more of a aesthethics addition, some customization and a goal of making it feel more local to the users</p>
            
            <img src={require('../images/muv-ui-muckups.jpg')}></img>
            

            <h2>Description</h2>
            <p>This is one of my favorite projects because it was one of the first ones that intersected technology and design, and i was just back from the New York course i made. There are a lot of things i would do different now, but the fact that i could implement in real life everything i had learned so far was a big deal for me. That in itself is the best kind of learning experience in my opinion.</p>
            
            <p>In terms of Branding my approach was a friendly and simple use of the letters of the name, taking advantage of it being so short. I think a three letter name is golden. It was intended for a temporary use (just for the MVP) but after it started gaining some traction they decided to keep it, just after making some fine tuning.</p>
            
            <p>On the UI side i just tried to tweak a little bit of what i could. Developed some icons and focused on consistency (since it was a template made for a different thing) I paid a lot of attention to the copy. Making sure the user knew what to do every step of the way. To do so we arranged some tests with users in a controlled environment where we could correct some of the bigger issues. For instance, in one of the first iterations if the user didn't ranked the driver the app got stuck there, if the user just closed the app after the ride, and then a few days later opened the app again and found that screen it would be very confusing. So we came up with a simple explanation that gave more info about that trip, and why it was important to rank the driver (this was particularly important in the early days of the project)</p>
            
            <p>The fact that what we built (with all it's errors) enabled the project to keep going and grow to this day, is what makes me think of as a success</p>
            
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
            
            link3="http://eklf.com.py/"
            text3="Rebranding for a young law firm"
            image3={require('../images/case-img-eklf.png')}  

        />

    </Layout>
)

// export default Muv

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-case-img-muv.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`