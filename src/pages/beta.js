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
import CasesTextNexToImage from '../components/CasesTextNextToImage'


export default ({data}) => (
    <Layout>
        <SEO title="Betacards" />
        <HeroImage> 
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                objectFit="cover"
                objectPosition="50% 50%"
                alt="A box of Betacards"
            />
        </HeroImage>

        <CasesSection>
            <h1>Bootstrapping a methodology-based startup</h1>
            <h2>Project Overview</h2>
            <p>Betacards is a Paraguayan startup that created a step by step guide, using a set of cards, to map out an idea taking into account the most important areas involved. For instance what problem the is idea solving, who are their users, what is the business model, what is it's purpose, among other things. It is meant to be used by consulting professionals, organizations that offers bootcamps, and people in general interested in using tools like business model canvas, empathy map, lego serious play and such.</p>
            
            <p>This project was incubated by miut.company, an innovation laboratory based in Paraguay which I co-founded. Over the first 2 years we focused on perfecting the product (methodology + experience + design) and also iterating business models so it can scale to LatAm (Spanish speaking countries), and eventually the rest of the world.</p>            
        </CasesSection>
        <CasesSection>
            <h2>My Contributions</h2>
            <p>I was the project leader for the first 2 years. Was in charge of turning this basic idea we had into something tangible, acting as a project and product manager making the firsts prototypes, developing the methodology itself with the other co-founders (Rodrigo and Juanma), branding the product, talking to users, explore business models that could work and building a community around the project with the help of the rest of the team at Miut (Specially Liz and Belu). Pretty much everything involved in moving this idea forward. We didn't have any initial angel or seed investing, so we bootstrapped it.</p>
            
            <img src={require('../images/betacards-being-used.png')} alt="The cards and people using them"></img>
            

            <h2>Description</h2>
            <p>Here is the evolution of Betacards as a project. In it's history is reflected my way of thinking and decision-making.</p>

            <CasesTextNexToImage>
                <div>
                    <h3>The idea</h3>
                    <p>It all started with some workshops we did at Miut to help clients get started with their new business ideas. We realized that some steps  repeated no matter the project or the client. For instance questions at the beginning of every process: "Who's this for? What kind of problem is it solving?" and so on. So we worked on a framework that contemplated all of those steps for working with future clients.</p>
                    <p>It got us thinking "What if we create a game out of it? Visualizing this steps by some sort of board? or cards maybe?". Me and Rodrigo (co-founder, primary shareholder of Miut and mentor of mine) started prototyping Betacards with some post-its on the wall, discussing what the main areas would be, and started calling them "Mundos" which is Spanish for Worlds. We started seeing some potential even at this stage, simply by seeing how a little order help structure ideas.</p>
                    
                </div>
                <img src={require('../images/first-version-of-betacards.png')} alt ="First version of the cards: just some post-its on the wall"></img>
            </CasesTextNexToImage>
            

            <h3>Experiments</h3>
            <p>Not too long after we made our first experiment. We printed some cards to try the methodology in a workshop we were invited to. That test went much better than we expected. We were able to gather a lot of feedback (since it was really an early version of the idea). We were surprised at how useful it was for  people using it. We decided to give the project more attention and resources (by resources i mean mostly time). Also it gave us some hints that it may not end up being a game, more like a tool.</p>
            
            <img src={require('../images/first-betacards-printed.png')} alt ="First printed version of the cards lying on the floor"></img>

            <p>From that point forward we adopted this Test-Build-Repeat approach, not too worried about not filling all the blank spaces yet. We wanted to know first hand where the value was before entering a polishing stage. From a design perspective, we focused on legibility and color coding to help guide the process. We picked yellow as the main color of Beta, a little homage to it's post-its origin, and the Museo Sans font because it has personality but mostly because it worked pretty well in a printed medium and small size.</p>
            

            <h3>Building a community</h3>
            <p>From that point forward we adopted this Test-Build-Repeat approach, not too worried about not filling all the blank spaces yet. We wanted to know first hand where the value was before entering a polishing stage. From a design perspective, we focused on legibility and color coding to help guide the process. We picked yellow as the main color of Beta, a little homage to it's post-its origin, and the Museo Sans font because it has personality but mostly because it worked pretty well in a printed medium and small size..</p>
            
            <img src={require('../images/early-community-building-of-beta.png')} alt ="People from Rotterdam in one of the early workshops we did in Europe"></img>
            

            <h3>Viability</h3>
            <p>While doing experiments, tests, validations, etc, we kept going to the question of how could we turn this into a business. We set the price for a typical 3 hour workshop using Betacards to be USD 300. At first we split it 100 Beta / 200 the facilitator. But it was a little messy trying to get in the way of each transaction the facilitators made, and once they had the cards, we didn't give them much incentive not to bypass us. So we knew it was a temporary model.</p>
            
            <p>We didn't let that stop us though. After 7-8 months we started to see an opportunity in building the business model around certifications. We found a potential market of people who already were in the business of helping founders and companies navigate innovation. We sell them a certification that can be renewed each year. It includes videos, the set of cards, some tools like a presentation deck and a step by step guide of the whole process and of course, access to the community. Made some spreadsheets, modest projections and decided we were going that way for a while.</p>
            

            <h3>Slow-but-steady growth</h3>
            <p>Right now we are still on that path, and we also decided not to rush it. We like having a some what organic growth. So far it has kept the community a place where like-minded people could interact and grow around the idea of "Starting companies in a better way", more focused on the user/client, aware of the global issues and with transformative purposes.</p>
        </CasesSection>
        <CasesSection>
            <h2>Some final thoughts</h2>
            <p>Visual design was an important factor. As a founder having the ability to put a deck quickly to attract the first facilitators was pretty handy. Also gave me the liberty to do the web on no-code platforms (first Squarespace, and then Wix) pretty much by myself. </p>
            
            <p>Design-wise i also created the first 2 versions of the printed cards, and then decided to outsource it because it took time that i might better spend wearing a founder's hat.</p>
            
            <p>It was a really good 360 experience of starting a business by making things that didn't scale, discovering a potential market, and then put it on a growth path. We don't plan to look for investments since with some the current margins we could start making a profit in less than a year if we reach our sales goal, that aren't that far fetched.</p>
        </CasesSection>

        <CasesSection>
            <Button text="← Back Home" link="/" />
        </CasesSection>

        <OtherProjects 
            link1="/muv"
            text1="Creating the MVP of the first ride-sharing app of Paraguay"
            image1={require('../images/case-img-muv.png')}

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
    file(relativePath: { eq: "hero-case-img-beta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`