import React, { Component } from "react"
import PropTypes from "prop-types"
import logo from "../images/logoLarge.png"
// import { Link } from "gatsby"
import colors from "../styles/colors"

const styles = {
  hiddenLogo: {
    opacity: 0,
  },
  displayLogo: {
    opacity: 1,
    transition: "opacity 2s",
  },
  hideHeader: {
    WebkitTransition: "background-color 500ms linear",
    msTransition: "background-color 500ms linear",
    transition: "background-color 500ms linear",
  },
  displayHeader: {
    backgroundColor: colors.black,
    WebkitTransition: "background-color 500ms linear",
    msTransition: "background-color 500ms linear",
    transition: "background-color 500ms linear",
  },
  hideNavIcons: {
    opacity: 0,
  },
  showNavIcons: {
    opacity: 1,
    transition: "opacity 2s",
  }
}

class Header extends Component {
  state = {
    logoHide: true,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY < 125) {
      this.setState({
        logoHide: true,
      })
    }
    if (window.scrollY > 125) {
      this.setState({
        logoHide: false,
      })
    }
  }

  handleSmoothScroll = () => {
    document.querySelector('.landing-div').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render() {
    return (
      <header className="header" style={ this.state.logoHide ? styles.hideHeader : styles.displayHeader }>
        <div className="logo-div" style={ this.state.logoHide ? styles.hiddenLogo : styles.displayLogo }>
          {/* {this.state.logoHide ? (
            <img src={logo} id="logo" alt="Isabella" style={{cursor: 'default'}}/>
          ) : (
            // <Link className="logo-a" to="/" >
              <img src={logo} id="logo" alt="Isabella" style={{cursor: 'pointer'}}onClick={this.handleSmoothScroll}/>
              // </Link>
              )} */}
          <img src={logo} id="logo" alt="Isabella" style={ this.state.logoHide ? {cursor: 'default'} : {cursor: 'pointer'} } onClick={this.handleSmoothScroll}/>
        </div>
        <div className="icon-div" style={ this.state.logoHide ? styles.hideNavIcons : styles.showNavIcons }>
          <a
            className="nav-link"
            href="https://www.facebook.com/IsabellaFitness/"
            target="_blank"
            rel="noopener noreferrer">
            <span title="Facebook">
              <i className="fab fa-facebook-square" alt="facebook" />
            </span>
          </a>
          <a
            className="nav-link"
            href="https://twitter.com/IsabellaFitness"
            target="_blank"
            rel="noopener noreferrer">
            <span title="Twitter">
              <i className="fab fa-twitter" alt="twitter" />
            </span>
          </a>
          <a
            className="nav-link"
            href="https://www.instagram.com/isabella_fitness_/"
            target="_blank"
            rel="noopener noreferrer">
            <span title="Instagram">
              <i className="fab fa-instagram" alt="instagram" />
            </span>
          </a>
        </div>
      </header>
    )
  }
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
