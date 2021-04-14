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
        <SEO title="Sepsa" />
        <HeroImage> 
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Screens of the UI of the MUV App"
            />
        </HeroImage>

        <CasesSection>
            <h1>Rethinking a web after rethinking a company</h1>
            <h2>Project Overview</h2>
            <p>Sepsa is a company that works in the supermarket retail business. It handles everything related to the purchases between supermarkets and their providers, inventory control and some Business Intelligence all using software. It's the first company in Paraguay to develop these types of B2B solutions. At the moment of the project, they needed to start opening up to more clients, and even creating products for consumers. They began that journey with a rebranding and a redesign of their landing page.</p>
                   
        </CasesSection>
        <CasesSection>
            <h2>My Contributions</h2>
            <p>This was a freelance project made in 2018. They asked me to re-design their website based on the new brand identity recently developed for them. I was in charge of getting all the information about what they wanted to achieve with their website, setting objectives, implementing the best possible design that reflected those necessities via prototypes and then handing off the elements to their developers. Tools used: Google Docs, Sketch and Invision</p>         

            <h2>Description</h2>
            <p>This was their website at the moment</p>

            <img src={require('../images/sepsa-before.png')} alt="What the website looked like before"></img>
            
            <p>They really didn't need much more, they had really good contracts closed and were already serving all to the big supermarket chains. But now, some of what they do was started to get commoditized and were faced with a challenge of re thinking their business or they would be vulnerable to no longer be needed by their clients. They started exploring consumer-oriented solutions, and that meant, for the first time since the company started, they needed to work on their public appearence. They started with a new logo and a new website.</p>
            
            <p>The main goal of the website was to be informative of what they do, a more institutional presence on the web, that painted the picture of the scope of what they do as a company, and to communicate future products for mass markets (apps and such)</p>
            
            <p>Taking that into account this is what i created:</p>

            <img src={require('../images/sepsa-home.jpg')} alt="Home page"></img>

            <img src={require('../images/sepsa-transacciones.jpg')} alt="Home page"></img>

            <img src={require('../images/sepsa-benefits.jpg')} alt="Home page"></img>

            <img src={require('../images/sepsa-services.jpg')} alt="Home page"></img>

            <img src={require('../images/sepsa-text-and-color.jpg')} alt="Home page"></img>
            
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

// This is a query that uses the plugin gatsby-iamge in order to optimize them
export const query = graphql`
  query {
    file(relativePath: { eq: "hero-case-img-sepsa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000 quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`