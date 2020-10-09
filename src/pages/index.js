import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cases from '../components/Cases'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
      <img className="ImageBehindTitle" src={require('../images/Hand.svg')} alt="Hand"></img>
       <h1>Hey! I'm looking for the next step in growing my career in tech</h1>
       <p>After teasing coding for the past +5 years while being a designer i’m looking to join a tech company to keep growing on my technical side, while adding value as a designer. Either as a <a className="Wtf">senior generalist designer</a>, mid-level UI/UX or a junior front-end developer, i truly believe i can add value to any company while growing within the role trusted in me.</p>
       <p>You can learn a little more <AniLink paintDrip to="/about" hex="#C6ECFD">about me</AniLink> or keep scrolling to see some of the work i’ve done.</p>        
      </div>
    </div>    

    <div className="StuffIDid">
      <h3>This is some of the stuff i did</h3>
      <img src={require('../images/stuff-i-did-pointer.svg')}></img>
    </div>

    <div className="CasesGroup">
      <AniLink paintDrip to="/beta" hex="#C6ECFD">
        <Cases
          textColumn="1"
          title="Bootstrapping a methodolgy-based startup"
          image={require('../images/case-img-betacards.png')}          
        />
      </AniLink>

      <AniLink paintDrip to="/muv" hex="#C6ECFD">
        <Cases          
          textColumn="2"
          title="Creating the MVP of the first ride-sharing app of Paraguay"
          image={require('../images/case-img-muv.png')}
        />
      </AniLink>

      <AniLink paintDrip to="/devpost" hex="#C6ECFD">
        <Cases
          textColumn="1"
          title="Researching how developers search for new jobs"
          image={require('../images/case-img-devpost.png')}
        />
      </AniLink>

      <a href="http://eklf.com.py/" target="_blank">
        <Cases
          textColumn="2"
          title="Rebranding of a young law firm"
          image={require('../images/case-img-eklf.png')}
          right
        />
      </a>

      <a href="https://www.notion.so/Memorize-App-Dipped-my-toes-in-SwiftUI-during-lockdown-e4ce4a8c6643471d968b9a03b34bf2f1" target="_blank">
        <Cases
          textColumn="1"
          title="Dipped my toes in SwiftUI during lockdown"
          image={require('../images/case-img-memorize.png')}
          />
        </a>

      </div>
  </Layout>  

)

export default IndexPage
