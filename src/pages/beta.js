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
        <SEO title="About me" />
        <HeroImage src={require('../images/hero-case-img-beta.png')} alt="A box open of Betacards"></HeroImage>
        <Section>
            <h1>Bootstrapping a methodology-based startup</h1>
            <h2>Project Overview</h2>
            <p>Betacards created a step by step guide, using a set of cards, to map out an idea taking into account the most important areas involved. For instance what problem the is idea solving, who are their users, what is the business model, what is it's purpose, among other things. It is meant to be used by consulting professionals, organizations that offers bootcamps, and people in general interested in using tools like business model canvas, empathy map, lego serious play and such methodologies.
            <Spacer></Spacer>
            This project was incubated by miut.company, an innovation laboratory based in Paraguay, which i co-founded. I was personally the project leader for the first 2 years fo Betacards. We focused on perfecting the product (methodology + experience + design) and also iterating business models so it can scale to LatAm, and then the rest of the world.</p>            
        </Section>
        <Section>
            <h2>My Contributions</h2>
            <p>I was in charge of turning this basic idea we had into something tangible.  I acted as a project and product manager making the firsts prototypes, developing the methodology itself with the other co-founders, branding the product, talking to users, explore business models that could work and building a community around the project. Pretty much everything involved in moving this idea forward. We didn't have any initial investing, so we had to bootstrap it.</p>
            <Spacer></Spacer>
            <img src={require('../images/betacards-being-used.png')}></img>
            <Spacer></Spacer>
            <Spacer></Spacer>

            <h2>Description</h2>

            <TextAndImage>
                <div>
                    <h3>The idea</h3>
                    <p>It all started with some workshops we did at Miut to help clients get started with their new ideas for business or other kinds of projects. We identified that some steps always repeated no matter what the project was, so we figured that we could create some sort of system that contemplated all of those steps. It got us thinking "what if these steps are visualized by some sort of cards or board? What if we create a game out of it?". Me and Rodrigo (my co-founder and primary shareholder of Miut) started prototyping Betacards with some post-its on the wall, discussing what the main areas would be, and started calling them "Mundos" which is spanish for Worlds. We started seeing some potential.</p>
                    <Spacer></Spacer>
                </div>
                <img src={require('../images/first-version-of-betacards.png')}></img>
            </TextAndImage>
            <Spacer></Spacer>
            <Spacer></Spacer>

            <h3>Experiments</h3>
            <p>Not too long after we made our first test. We printed some cards to try the methodology in a workshop we were invited to. That test went much better than we expected. We were able to gather a lot of feedback (since it was really an early version of the idea) but what surprised us was how useful it was for the people using it. That was the main reason we decided to give the project more attention and resources (by resources i mean mostly time, not necessarily money). Also it gave us some hints that it may not end up being a game, more like a tool, but playful.</p>
            <Spacer></Spacer>
            <img src={require('../images/first-betacards-printed.png')}></img>
            <Spacer></Spacer>

            <h3>Building a community</h3>
            <p>From day one we knew we wanted to build this with a community around it. Got in contact with some friends and colleagues that we knew were going to love Beta. Discussed with them the methodology and started giving them some set of cards so they can use with their clients and give us feedback whenever they found some room for improvement. This was a really manual and personal process. I got in touch with everyone who first tried out Beta. Some times feedback was just an audio message, or a text, but whenever they could we had personal meetings where i gained a little more insight on what was going on.
            <Spacer></Spacer>
            Even now we try to keep a close and personal link to every member of the Beta community, sending updates of Beta but also listening to what are their concerns and always trying to get feedback about the methodology.</p>
            <Spacer></Spacer>
            <img src={require('../images/early-community-building-of-beta.png')}></img>
            <Spacer></Spacer>

            <h3>Viability</h3>
            <p>While doing experiments, tests, validations, etc, we kept going to the question of how could we turn this into a business. We set the price for a typical 3 hour workshop using Betacards to be USD 300. At first we split it 100 Beta / 200 the facilitator. But it was a little messy trying to get in the way of each transaction the facilitators made, and once they had the cards, we weren't given them much incentive not to bypass us. So we knew it was a temporary model.
            <Spacer></Spacer>
            We didn't let that stop us though. And after 7-8 months we started to see an opportunity in building the business model around certifications. We found a potential market of people who are already are in the business of helping founders and companies navigate innovation. So we would sell them a certification that can be renewed each year. It includes videos, the set of cards, some tools like presentation deck and a step by step guide of the whole process and of course, access to the community. Made some spreadsheets, projections and so on and decided we are going that way for a while.</p>
            <Spacer></Spacer>

            <h3>Slow-but-steady growth</h3>
            <p>Right now we are still on that path, and we also decided not to rush it. We like having a some what organic growth. So far it has kept the community a place where like-minded people could interact and grow around the idea of "Starting companies in a better way", more focused on the user/client, aware of the global issues and with a transformative purpose.</p>
        </Section>
        <Section>
            <h2>Some final thoughts</h2>
            <p>This project wasn't exactly UI intense, but visual design was an important factor. As a founder having the ability to put a deck quickly to attract the first facilitators was pretty handy. Also gave me the liberty to do the web on no-code platforms (first Squarespace, and then Wix) pretty much by myself. 
            <Spacer></Spacer>
            Design-wise i also created the first 2 versions of the printed cards, and then decided to outsource it because it took time that i might better spend wearing a founder's hat.
            <Spacer></Spacer>
            It was a really good 360 experience of starting a business by making things that didn't scale, discovering a potential market, and then put it on a growth path. We don't plan to look for investments since with some the current margins we could start making a profit in less than a year if we reach our sales goal, that aren't that far fetched.</p>
        </Section>
        <Section>
            <Button text="← Go Home" link="/" />
        </Section>
        <OtherProjects 
            link1="/"
            text1="Creating the MVP of the first ride-sharing app of Paraguay"
            image1={require('../images/case-img-muv.png')}

            link2="/"
            text2="Researching how developers search for jobs"
            image2={require('../images/case-img-devpost.png')}
            
            link3="/"
            text3="Rebranding for a young law firm"
            image3={require('../images/case-img-eklf.png')}  

        />

    </Layout>
)

export default Beta
