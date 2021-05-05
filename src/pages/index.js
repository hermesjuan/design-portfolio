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
       <h1>Hey! I'm looking for opportunities as a UI, UX or product designer</h1>
       <p>I’m open for opportunities to keep growing on my career as a graphic designer with a special interest of working in tech</p>
       <p>You can learn a little more <AniLink paintDrip to="/about" hex="#C6ECFD">about me</AniLink> or keep scrolling to see some of the work i’ve done.</p>        
      </div>
    </div>    

    <div className="StuffIDid">
      <h3>Some things I made</h3>
      <img src={require('../images/stuff-i-did-pointer.svg')}></img>
    </div>

    <div className="CasesGroup">

    <AniLink paintDrip to="/aruba" hex="#C6ECFD">
        <Cases
          textColumn="1"
          title="Admin panel for professionals of the beauty industry"
          image={require('../images/case-img-aruba.png')}
          right
        />
      </AniLink>

      <AniLink paintDrip to="/innovation-index" hex="#C6ECFD">
        <Cases          
          textColumn="2"
          title="Prototyping a tool that measures innovation"
          image={require('../images/case-img-inndex.png')}
        />
      </AniLink>

      <AniLink paintDrip to="/muv" hex="#C6ECFD">
        <Cases          
          textColumn="1"
          title="Creating the MVP of the first ride-sharing app of Paraguay"
          image={require('../images/case-img-muv.png')}
        />
      </AniLink>

      <AniLink paintDrip to="/devpost" hex="#C6ECFD">
        <Cases
          textColumn="2"
          title="Researching how developers search for new jobs"
          image={require('../images/case-img-devpost.png')}
        />
      </AniLink>

      <AniLink paintDrip to="/beta" hex="#C6ECFD">
        <Cases
          textColumn="1"
          title="Bootstrapping a methodolgy-based startup"
          image={require('../images/case-img-betacards.png')}          
        />
      </AniLink>

      <AniLink paintDrip to="/sepsa" hex="#C6ECFD">
        <Cases
          textColumn="2"
          title="Rethinking a web after rethinking a company"
          image={require('../images/case-img-sepsa.png')}
        />
      </AniLink>

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
