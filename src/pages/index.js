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
       <p>I am on a quest trying to find what I want to do with my life. How I make a living is a big part of it. I made a career in design going from advertising, to branding and also freelancing and starting projects as an entrepreneur in Asunción (PY). The findings of my quest so far, shows that whatever I do, I want it to be involved with technology.</p>
       <p>Looking at what comes next on this quest, I would like to have the experience of a mature tech ecosystem, being part of a company where I can, not only grow as a UI, Product designer or a <a className="Wtf">Generalist designer</a> (even as a Front-end dev with the right mentorship), but also to better understand how companies like this work. And eventually transfer some of that knowledge back to my home country.</p>
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
