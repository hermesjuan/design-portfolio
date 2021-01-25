import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Hero = styled.div `
  margin: 150px 50px 50px 50px;
  @media (max-width: 800px) {
    h1 { font-size: 42px; }
  }
  @media (max-width: 600px) {
    margin: 90px 20px;
    line-height: 1.3;
    h1 { font-size: 34px; }
  }
`
const HeroGroup = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  h1 { max-width: 800px; }
  p { max-width: 600px; }
`
const JourneyGraph = styled.img `
  width: 100%;
  @media (max-width: 700px) {display: none; } 
`
const ResponsiveJourneyGraph = styled.img `
  display: none;
  @media (max-width: 700px) {
    display: block;
    width: 100%;
  }  
`
const Section = styled.div`
  margin: 50px auto;
  padding: 30px 50px;
  max-width: 1000px;
  p {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
    max-width: 520px;
  }
  a {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    h2 {
      margin: 50px 30px 0 0;
      font-size: 20px;
      text-align: right;
      color: #139CD7;
      @media (max-width: 640px) {
        margin: 50px auto;
        text-align: center;
      }
    }
  }
  @media (max-width: 600px) {  padding: 30px 20px; }
`
const Position = styled.h3 `
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #139CD7;
  margin-top: 50px;
  margin-bottom: 0;
  a {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
`
const Year = styled.p `
  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #139CD7;
  margin-top: 0;
`
const Left = styled.div ``

const Right = styled.div `
  p {
    margin-bottom: 40px;
    margin-top: 0;
  }`

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


const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <Hero>
      <HeroGroup>
        <h1>I like design, music, photography and everything tech related.</h1>
        <p>Since high school i've been drawn to technology and everything it can accomplish. At first i thought the only way to get in the field was by becoming a programmer. Then i realized that design had a ton to do with technology, and from that point it was clear to me that i wanted to be wherever technology and design overlap.</p>
        <p>Here's my journey so far:</p>
      </HeroGroup>
    </Hero>    
    <Section>
      <h3>My journey</h3>    
      <JourneyGraph src={require('../images/journey-graph.svg')} alt="Graph of my journey so far"/>
      <ResponsiveJourneyGraph src={require('../images/responsive-journey-graph.svg')} alt="Graph of my journey so far"/>
    </Section>
    <Section><AniLink paintDrip to="/deep-webrmes" hex="#C6ECFD">Dare to dig deeper?</AniLink></Section>
    <Section>
      <Group>
        <Left>
          <h2>Work Experience</h2>

          <Position>Product Manager & Cofounder @ <a href="https://www.beta.cards" target="_blank">ww.beta.cards</a></Position>
          <Year>2018 - 2020</Year>
          <p>In charge of turning an idea into a company, making several validations and pivots taking into account vital information coming from users, the business model, and design aspects of the project like the printed cards, the web and a lot of materials for the implementation of the Betacards workshops.
          Got in 10 new markets in 2 years, developed the methodology through several iterations of improvements cycles and kick-started the community around Beta today consistent of +100 hundred people.</p>

          <Position>Product Manager & Cofounder @ <a href="https://www.miut.company" target="_blank">ww.miut.company</a></Position>
          <Year>2018 - 2020</Year>
          <p>In charge of new products incubated by Miut, like <Link href="https://www.beta.cards" target="_blank">beta.cards</Link> and <Link href="httos://www.inndex.co" target="_blank">inndex.co</Link>. Performed the role of Maker in a 6 week program designed by Miut to help companies work on new business ideas.<br></br>
          Involved in all major company's decisions as a co-founder and shareholder.</p>

          <Position>Graphic Designer @ <Link href="https://www.estoesbrandon.com" target="_blank">Brandon</Link></Position>
          <Year>2016 - 2019</Year>
          <p>Branding related projects for some of the biggest companies in Paraguay like Cervepar, a member of the ABIBev conglomerate; MUV, the first ride sharing company in the country, Zamphiropolos, a printing house giant, among many others.</p>

          <Position>Freelance: Branding, UI, UX, Photography</Position>
          <Year>2016 - Present day</Year>
          <p>Branding and Web related projects. A lot of no code websites using Squarespace and Wix. From 2018 to 2019 became a wedding photographer during the weekends.</p>

          <p>Had the opportunity of mentoring Paraguayan entrepreneurs in acceleration programs and pitch contests.</p>

          <p>Gave a couple of talks too, biggest one to an audience of nearly 1k in 2019.</p>

          <Position>Graphic Designer @ B Lab</Position>
          <Year>2014 - 2016</Year>
          <p>B LAB was an advertising agency created to work with the brands of the importer Distribuidora Gloria. I performed as a Senior graphic designer in charge of visual designs for different media (POS, OOH, digital, both ATL and BTL). Mostly focused on Miller Lite, Peroni and the Wines division.
          Developed various campaign Key Visuals from idea to execution, updated the visual line of POS and participated in the Creative department for some </p>

          <Position>Jr Graphic Designer @ <Link href="https://www.oniria.com.py" target="_blank">Oniria TBWA</Link></Position>
          <Year>2012 - 2013</Year>
          <p>Junior Designer at the first Paraguayan ad agency to win a Cannes Lion, on of the most prestigious awards in advertising.</p>
          
          <p>Started in the digital department and in less than a year ended up being the lead designer of the bank Itaú, arguably the most important bank of the country.</p>

          <p>Also collaborated with projects of other brands like Toyota, Shopping Mariscal, Mabroro, among others. Also collaborated with projects of other brands like Toyota, Shopping Mariscal, Mabroro, among others.</p>

        </Left>
        <Right>
          <h2>Contact Info</h2>
          <p>
            hermes@hey.com<br></br>    
            linkedin.com/in/hermesjuan<br></br>
            (Sioux Falls-US/Asuncion-PY)
          </p>

          <h2>Education</h2>
          <p>
            <strong>Software Engineer</strong>
            <br></br>
            Universidad Nacional de Asunción - FPUNA
            <br></br>
            2010 - 2010
            <br></br>
            <em className="Highlight">Unfinished 🤷‍♂️</em>
          </p>
          <p>
            <strong>Graphic Desing B.D.</strong>
            <br></br>
            Universidad Católica de Asunción - CyT
            <br></br>
            2012 - 2017
            <br></br>
            <strong className="Highlight">Graduated 🎓</strong>
          </p>
          <p>
            <strong>Web Design Track</strong>
            <br></br>
            Startup Institute New York
            <br></br>
            Feb - Apr 2014
          </p>

          <h2>Strengths</h2>
          <p>
          Entrepreneurial<br></br>    
          Curious<br></br>
          Hard Working<br></br>
          Creative Problem Solver<br></br>
          With a Growth Mindset<br></br>
          Adaptable
          </p>
        </Right>
      </Group>      
    </Section>
  </Layout>
)

export default AboutMe
