import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cases from '../components/Cases'
import Section from '../components/Section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
      <img className="ImageBehindTitle" src={require('../images/Hand.svg')} alt="Hand"></img>
       <h1>Hey! I'm looking for the next step in building a career in tech</h1>
       <p>After teasing coding for the past +5 years while being a designer i’m looking to join a tech company to keep growing on my technical side, while adding value as a designer. Either as a <a className="Wtf">senior generalist designer</a>, mid-level UI/UX or a junior front-end developer, i truly believe i can add value to any company while growing within the role trusted in me.</p>
       <p>You can learn a little more <Link to="/about">about me</Link> or keep scrolling to see some of the work i’ve done.</p>
        
      </div>
    </div>    
    <div className="CasesGroup">
      <Cases
        title="Bootstrapping a methodolgy-based startup"
        image={require('../images/Case-Betacards.jpg')}
        />
      <Cases
        title="Creating the MVP of the first ride-sharing app of Paraguay"
        image={require('../images/Case-MUV.jpg')}
        />
      <Cases
        title="Researching how developers search for new jobs"
        image={require('../images/Case-Devpost.jpg')}
        />
      <Cases
        title="Creating the logo of a social think tank"
        image={require('../images/Case-VS.jpg')}
        />
      <Cases
        title="Dipped my toes in SwiftUI during lockdown"
        image={require('../images/Case-Swift.jpg')}
        />
      </div>
      <Section
        title="Things i feel comfortable doing"
        element1="Branding"
        color1="#F7F4EF"
        element2="UI"
        color2="#F2F8F8"
        element3="Photography"
        element4="UX"
        element5="Some coding"
        element6="No code"
      />
  </Layout>  
)

export default IndexPage
