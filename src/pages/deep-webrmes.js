import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Hero = styled.div `
  margin: 150px 50px 100px 50px;  
  @media (max-width: 800px) {
    h1 { font-size: 42px; }
  }
  @media (max-width: 600px) {
    margin: 90px 20px;
    h1 { font-size: 30px; }
  }
`
const HeroGroup = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  h1 { max-width: 800px; }
  p { max-width: 500px; }
`
const Section = styled.div`
  margin: 50px auto;
  padding: 30px 50px;
  max-width: 1000px;
  p {
    font-family: Merriweather;
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    max-width: 780px;
    color: #000;
  }
  a {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  div { max-width: 780px;}
  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`

const Group = styled.div `
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-column-gap: 40px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 20px;
  }
`
const Line = styled.span `
  height: 6px;
  display: block;
`
const Callout = styled.div `
  margin: 30px 0;
  display: grid;
  grid-template-columns: 0.4fr 0.4fr;
  p { 
    font-family: 'Inconsolata', monospace; 
    padding: 10px 20px;
    line-height: 1.4;
  }
  strong {
    font-family: 'Raleway', sans-serif;
    font-size: 1.3em;
    line-height: 2;
  }
`
  const TLDR = styled.h2 `
  position: relative;
  font-family: Merriweather;
  font-weight: 300;
  font-size: 1.5em;
  border-left: 4px solid;
  padding: 20px;
  margin: 40px 10px 50px 0px;
  background-color: white;
`
const FinalSection =styled(Section)`
  text-align: center;
  max-width: 460px;
  left: 0;
  right: 0;
  @media (max-width: 600px) {
    h1 {font-size: 32px; }
    img { max-width: 150px;}
  }
`
/* Colors for different sections: Education, Jobs and My own things */

const Education = styled.div `
  span { background: rgba(253,216,198,1); }
  div { background: rgba(253,216,198,0.2); }
  h2 { border-color: rgba(253,216,198,1); }
`
const Jobs = styled.div `
  span { background: rgba(198,236,253,1); }
  div { background-color: rgba(198,236,253,0.2); }
  h2 { border-color: rgba(198,236,253,1); }
`
const MyOwnThings = styled.div `
  span { background: rgba(253,251,198,1); }
  div { background-color: rgba(253,251,198,0.2); }
  h2 { border-color: rgba(253,251,198,1); }
`
const AboutMe = () => (
  <Layout>
    <SEO title="A lot more about me" />
    <Hero>
      <HeroGroup>
        <h1>Short story long</h1>
        <p>Here is an in-depth look at my joruney so far. It’s an effort to describe what i have been through, how i made some decisions and what was the most important thing in each stage.</p>
        <p>Unlike a CV, this section start at the
        begining, to give a better sense of how
        my thinking evolved.</p>
      </HeroGroup>
    </Hero>    
    
    <Section>
      <Education>
        <h3>Education</h3>
        <Line/>

        <Callout>
          <p><strong>Software Engineer</strong><br></br>
          Universidad Nacional de Asunción<br></br>
          Facultad Politécnica<br></br>
          2010 - 2012</p>
          <p><strong>Bachelor of Design</strong><br></br>
          Universidad Católica de Asunción<br></br>
          Facultad de Ciencias y Tecnología<br></br>
          2012 - 2017</p>
        </Callout>

        <TLDR>TL;DR: Started Software Engineering but switched to Graphic Design. From an early stage I could see that technology and design are important to me, and that reamins true today.</TLDR>

        <p>At the age of 16 i had a little bit of a crisis. It didn’t make sense to me that at 18 (just 2 years from that) I was supposed to make this huge decision of what I was going to do for the rest of my life (It still doesn’t makes sense to me).</p>

        <p>So after dealing with that impossible question during the last years of high school at the private german school i attended, I ended up doing what other people saw i could be good at: Tech and logical stuff. So i applied to the National University of Asunción, the best college to study Software Engineering in my country that i knew of. It has super competitive entry exams, it was one of the hardest challenges i had faced... and I got in! I’m still super proud of that 😎. I believe only 60 people out of 300 got in.</p>

        <p>After 2 years i started second guessing my decision. I talked to people that already had their degrees and try to see what the job market was. What they did everyday, just figuring out what my life post-degree would be like, and i didn't like what i saw, mostly telecomm jobs, and network related stuff. Even though i enjoyed the coding-algorithms related subjects, the pure math ones were getting really hard.</p>

        <p>So i started looking around what else was out there and came across graphic design. I never heard much of it, but it certainly caught my attention. During coding projects I always looked forward to building the interfaces, so here i was looking at a field mostly centered in that (although not so much on digital products, but still)</p>

        <p>The thing is, and i'm not proud of this, being a programmer filled my ego a lot more than being a designer. Socially there was this look of disdain at this career (There were a lot of jokes that i would starve doing that). So, still being a young man figuring things out, before i made any big decision I took both classes one semester. I took fewer classes that semester in engineering and all in the morning, and i signed up to another University to see what the first semester of graphic design was all about.</p>

        <p>I ended up switching entirely to design, it was mostly an academic decision. I would have a degree in Graphic Design instead of a Software Engineering one, but I still wasn't so sure about designing for the rest of my life. </p>

        <p>From an early stage i could see that technology and design are important to me (also music but that is for another time) I think that i have some natural skills for both of these fields, but i learned that in order to achieve great things I have to put in the effort. That allowed me to grow, but i can't see myself taking a linear career path. I'm not afraid of starting over, even just 2 years after finish high school, and now at 28 years old, i'm super comfortable being a "junior" at something. On the opposite, is a big driver for me.</p>
      </Education>
    </Section>
    
    <Section>
      <Education>
        <Callout>
          <p><strong>Web development</strong><br></br>
          Startup Institute New York<br></br>
          2016</p>
        </Callout>

        <TLDR>TL;DR: Introduced me to the startup world and had a big influence in the search of what I want to do in life.</TLDR>

        <p>This was really a turning point in my career. I have a sister that was living in NY, and I really wanted to visit her but also, i was looking  for some kind of course i could make there, since I had a place to stay.</p>

        <p>TThis search triggered kind of a career deciding moment. It brought what I really wanted to do into question. I bumped into UX, started researching it a lot and it seemed interesting. </p>

        <p>After looking into various bootcamps-like programs (like General Assembly) i found the Startup Institute, it was like a startup accelerator, but for people that wanted to work in startups (btw i had no idea what a startup was). What caught my attention was that they would help not only with getting web development technical skills, but also with that big question of what i really wanted to do.</p>

        <p>I did the program and getting to know the startup ecosystem blew my mind. Still wasn't all that clear what i wanted to do but it definitely got to do with some of that. Small teams challenging the world leveraging technology. A way of life with a lot of liberties but also a lot of accountability.</p>
      </Education>
    </Section>
    <Section>
      <Jobs>
        <h2>Jobs</h2>
        <Line/>

        <Callout>
          <p><strong>Oniria TBWA</strong><br></br>
          Jr. Graphic Designer (advertising)<br></br>
          2012 - 2013</p>
        </Callout>

        <TLDR>TL;DR: Got my first job at the best ad agency in Paraguay after finishing a 2 months internship  with a lot of help and lot of work.</TLDR>

        <p>My first Job! As i mentioned in the previous section, I decided to start de bachelors degree in graphic design only if i started working right away. And not anywhere, i wanted to work in the best company in that field. That is how i found Oniria/TBWA, the best ad agency in Paraguay (at least for me).</p>

        <p> I applied for a two month internship with ZERO experience in design whatsoever, but determined to get a job after those 2 months. I busted my 🍑 and also met incredible and generous women who happened to be (to this day) one of the best in their field. Di and Natha took me under their wings and teach me all the basics. From tools to concepts, that felt A LOT more educational that all the classes i was having. I'll never forget the huge impact they made on my career. </p>
      </Jobs>
    </Section>
    <Section>
      <Jobs>
        <Callout>
          <p><strong>B Lab</strong><br></br>
          Graphic Designer (advertising)<br></br>
          Facultad Politécnica<br></br>
          2014 - 2016 </p>
        </Callout>

        <TLDR>TL;DR: Junior → Senior Designer. Had a taste of what being a founder was.</TLDR>

        <p>So actually i got hired at Brandon (that's coming up next!) but after a few weeks after i started this new ad hoc agency project got on the table of some of the same partners at Brandon and decided to put on a team. They thought i could be a good fit and i said yes. </p>

        <p>I think that here is where i started to feel comfortable calling myself a Senior designer. We had a lot of challenges but i really had a blast in this place. It was an awesome team and i also had some say in a little bit of everything putting up the agency, from the name, to the office, even in some of the hires. I called it the almost-entrepreneurial experience. We had to shut down the agency due to some external factors mostly concerned with the client the agency was put up for.</p>
      </Jobs>
    </Section>
    <Section>
      <Jobs>
        <Callout>
          <p><strong>Brandon</strong><br></br>
          Graphic Designer (branding)<br></br>
          Facultad Politécnica<br></br>
          2016 - 2019</p>
        </Callout>

        <TLDR>TL;DR: Change of pace. An overall incredible work experience.</TLDR>

        <p>Once B Lab was over i went back to Brandon. It  was a big change for me in the sense that in advertising the rhythm was always really high paced. Brandon was a Design Studio mainly focused in Branding, and the schedule was based on projects for different clients. One branding project could last 1 or 2 months.</p>

        <p>Again i met an incredible team and was able to get involved in a lot of great projects with a lot of "big name" companies. I got to participate in a lot of work that i'm really proud of.</p>
      </Jobs>
    </Section>

    <Section>
      <MyOwnThings>
        <h2>My own things</h2>
        <Line/>

        <Callout>
          <p><strong>Miut</strong><br></br>
          Product Manager & Cofounder <br></br>
          2018 - 2020</p>
        </Callout>

        <TLDR>TL;DR: First founder experience creating an innovation lab called Miut. Was in charge of all kinds of products.</TLDR>

        <p>After taking that course in NY (See Startup Institute) one of the directors of both Brandon (job at the time) and Oniria (my first job) told me about this new project that he was working on. Some sort of innovation laboratory, a company that leveraged concepts from the tech and enterprise world to help companies stay up to date and even grow through new business models.</p>

        <p>We started doing a couple of workshops (one of them is the first Paraguayan ride-sharing app MUV, which i put on my portfolio) mostly to help people create some experiments to validate ideas (building MVPs basically). These workshops were the basis for BetaCards, which i'll discuss next</p>

        <p>In 2018 i started splitting my days between Brandon and Miut (the name of the innovation lab) and in 2019 i went full time. We designed Miut to have a small HQ, and an expanded network of ad hoc collaborators. We started giving consultancies to some companies, and also workshops like the ones in the beginning. </p>

        <p>We got to realize that innovation cannot be approached in a individualistic way, so with the spirit of building a community (we called it com[miut]nity 😬) we started doing some programs that got people introduced to this world of knowledge. We called the program 'Mindsets'</p>

        <p>In Miut I took a Product manager role, in charge of developing Miut's own products (www.beta.cards and www.inndex.co) and also for clients, managing and guiding collaborators from that network i mentioned. I also had some say in the consultancy products and in 'Mindsets' especially when we had to make the program virtual.</p>

        <p>I did some of design (prototyping logos and branding), a lot of no-code building, using website builders like Wix and Squarespace, connecting them to automation services like Zapier, databases in Google Sheets and Airtable. Everything that let us test the product in real customers and validate our hypothesis. </p>

        <p>Today Miut keeps in a path of growth and aims to shape companies (in Paraguay and the region) in a way to be better prepared for the present (that some still look at like it's the future). It also continues to build it's own products.</p>
      </MyOwnThings>
    </Section>
    <Section>
      <MyOwnThings>
        <Callout>
          <p><strong>Betacards</strong><br></br>
          Product Manager & Co-founder<br></br>
          2019 - 2020</p>
        </Callout>

        <TLDR>TL;DR: The biggest product design and management role i had so far.</TLDR>

        <p>Betacards is a methodology-based company, think of Strategyzer a company built around the creation and monetization of the Business Model Canvas. Betacards created a methodology and sells certifications to people wanting to facilitate workshops using that methodology.</p>

        <p>It was created around a cards system, it maps ideas going over 6 'worlds' that explore the problem the idea wants to solve, who it customer is, what kind of business model it has (or can have) and so on. One of the main differentiators from other methodologies is that it already has a bunch of options for most of the questions it makes, and the other added value we are trying to bring is it's colorful and friendly design, giving it a game-like feeling.</p>

        <p>This was a huge product experience for me. I had responsibilities for virtually every aspect of the project. From registering the copyright, to building it's landing page. I even designed every card from the first iterations. Had a lot of experiments with users, gathered data to improve the experience, and implemented most of it by myself (at least the first year or so). It was also pretty revealing how hard it can be to find the business model for something that you discover has a potential market for it. People really loved the workshops using Betacards, but selling each workshop was not something that could scale. Getting around the certifications model was a lot of work and a lot of tests.</p>

        <p>Right now we are trying to slowly build a more specialized team that can better handle the growth Betacards is having.</p>
      </MyOwnThings>
    </Section>
    <FinalSection>
      <div style={{width: '100px', height: '5px', background: '#C6ECFD', margin: '40px auto'}}></div>
      <h1>That's all folks!</h1>
      <p>If somehow you are not a recruiter or looking for hires and ended up here, if you feel like talking my e-mail is down there 👇</p>
    </FinalSection>
  </Layout>
)

export default AboutMe
