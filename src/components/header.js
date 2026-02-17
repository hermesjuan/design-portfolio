import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends React.Component {
  constructor(props) {
   super(props)

   this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }    
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <AniLink className='Logo' paintDrip to="/" hex="#C6ECFD"><img src={require('../images/Logo.svg')} width="85px" alt="Hermes Juan logo"/></AniLink>
          <div></div>
          <AniLink className='Link' paintDrip to="/about" hex="#C6ECFD">About me</AniLink>
        </div>
     </div>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
