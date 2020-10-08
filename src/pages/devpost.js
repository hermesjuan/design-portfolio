import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import styled from "styled-components"
import OtherProjects from '../components/OtherProjects'

const HeroImage = styled.img `
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    text-align: center;
    @media (max-width: 640px) {
        height: 300px;
    }
`
const Section = styled.div`
  margin: 50px auto;
  padding: 30px 50px;
  max-width: 1000px;
  margin-block-start: 0;
  h1 {
    font-weight: 900;
    font-size: 52px;
    line-height: 1.1;
    max-width: 780px;
  }
  p {
    font-family: Merriweather;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.4;
    max-width: 780px;
  }
  a {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  div { max-width: 780px; }
  @media (max-width: 780px) {
    padding: 30px 20px;
    img { width: 100%; }
  }
  @media (max-width: 640px){
      h1 { font-size: 34px; }
  }
`
const Spacer = styled.div `
    padding: 10px 0;
`
const TextAndImage = styled.div `
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    grid-column-gap: 30px;
    @media (max-width: 640px) {
        grid-template-columns: 1fr 0;
    }

`

const Beta = () => (
    <Layout>
        <SEO title="Devpost" />
        <HeroImage src={require('../images/hero-case-img-devpost.jpg')} alt="A mockup of Devpost's website"></HeroImage>
        <Section>
            <h1>Researching how developers search for new jobs</h1>
            <h2>Project Overview</h2>
            <p>Betacards created a step by step guide, using a set of cards, to map out an idea taking into account the most important areas involved. For instance what problem the is idea solving, who are their users, what is the business model, what is it's purpose, among other things. It is meant to be used by consulting professionals, organizations that offers bootcamps, and people in general interested in using tools like business model canvas, empathy map, lego serious play and such methodologies.
            <Spacer></Spacer>
            This project was incubated by miut.company, an innovation laboratory based in Paraguay, which i co-founded. I was personally the project leader for the first 2 years fo Betacards. We focused on perfecting the product (methodology + experience + design) and also iterating business models so it can scale to LatAm, and then the rest of the world.</p>   

            <h2>My Contributions</h2>
            <p>I was in charge of turning this basic idea we had into something tangible.  I acted as a project and product manager making the firsts prototypes, developing the methodology itself with the other co-founders, branding the product, talking to users, explore business models that could work and building a community around the project. Pretty much everything involved in moving this idea forward. We didn't have any initial investing, so we had to bootstrap it.</p>
            <img src={require('../images/devpost-intro.jpg')}></img>         
        </Section>
        <Section>
            <h2>Description</h2>
            <p>The research pipeline was designed like this: First, gather all the information relevant about developers salaries in the US. Then send some surveys and schedule interviews. After that identify trends, create user personas, and make a presentation to the product manager with our finds </p>
            <img src={require('../images/devpost-process.svg')}></img> 
            
            <p>The first survey was meant to get a sense of the priorities of developers looking for new jobs and to spot people open to be interviewed. It was just 7 questions in order to maximize the response and paint a first picture of the dev job hunting scene. After that i sent some follow up mails to try to get some one on one calls to show the current state of the product and finding some areas of improvement.
            <Spacer></Spacer>
            Then we started to map the concerns and interests of the people we had interviewed. We used some post-its in the wall and got this big picture, differentiating senior, mid-level and junior developers.</p>
            <Spacer></Spacer>
            <img src={require('../images/devpost-anotations.jpg')}></img>
            <Spacer></Spacer>

            <p><strong>With that information i came up with this User Persona.</strong></p>
            <img src={require('../images/devpost-user-persona.png')}></img>
            <Spacer></Spacer>
            
            <p><strong>This led us to rethink some of the aspects of the current state of the Team Pages.</strong></p>
            
            <img src={require('../images/devpost-evolution-1.png')}></img>
            <Spacer></Spacer>
            <p>First, trying to achieve a cleaner look in the landing page. Most of the developers we interview had a pretty clear sense of what they were looking for. So instead of showing some of the companies listed looking for hires, we gave more importance to the search process.</p>

            <img src={require('../images/devpost-evolution-2.png')}></img>
            <Spacer></Spacer>
            <p>We moved from a pop-up window to a more streamlined process of answering questions about location, the positions they were interested in, what level of experience they had, their tech stack and finally the company size. At the moment of this presentation we weren't sure if it was best to input salary expectative so we initially left it out. </p>

            <img src={require('../images/devpost-evolution-3.png')}></img>
            <Spacer></Spacer>
            <p>And finally the results page. We decided to give a direct overview of the company with the best match. Showing the positions available, then a quick view of the company's interview process, internships, benefits, among other things. Also a section specifically for the Tech stack, something during interviews was particularlly important to more senior developers. We also added a section where members of the company share what they thought of working there, and lastly other results that had fewer matches in the search.</p>
        </Section>
        <Section>
            <h2>Some final thoughts</h2>
            <p>This project was significant to me because it was my first experience doing UX, and the fact that it was within a New York based startup made it pretty exciting. It was for a brief period but i could get a taste of what it meant to be a UX researcher, and how i could contribute to a team from that role going throug a whole iteration. I wish i had the time to make test over the presentation we made, but already i had some improvements i'd like to make after seing the mockups, like giving more opportunity to navigate other companies before giving a full overview of the best match. Also some branding suggestions that i thought i could help a better postinioning of Devpost.
            <Spacer></Spacer>
            But i ended up pretty satisfied with the results, and had a great time working with the folks at Devpost who were all super nice.
            <Spacer></Spacer>
            Check out more about them at <a href="https://devpost.com/" target="_blank">devpost.com</a></p>
        </Section>
        <Section>
            <Button text="← Go Home" link="/" />
        </Section>
        <OtherProjects 
            link1="/beta"
            text1="Bootstrapping a methodolgy based startup"
            image1={require('../images/case-img-betacards.png')}

            link2="/muv"
            text2="Creating the MVP of the first ride-sharing app of Paraguay"
            image2={require('../images/case-img-muv.png')}
            
            link3="/"
            text3="Rebranding for a young law firm"
            image3={require('../images/case-img-eklf.png')}  

        />

    </Layout>
)

export default Beta
