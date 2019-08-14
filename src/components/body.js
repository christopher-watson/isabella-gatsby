import React, { Component } from 'react';
import Landing from "./landing"
import Info from "../components/info"
import Slide from "../components/slide"
import Bio from "../components/bio"
import Form from "./form"
import GoogleMap from "../components/GoogleMap"


const styles = {
  arrowHide: {
    opacity: 0,
  },
  arrowShow: {
    opacity: 1,
    transition: "opacity 2s",
  },
}

class Body extends Component {
  state = { 
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    this.handleWindowScroll()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleWindowScroll)
    setTimeout(() => {
      this.setState({ rttDelay: false })
    }, 3000);
    setTimeout(() => {
      this.setState({ rttLoaded: true })
    }, 500);
  }

  handleResize = () => {
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }

  handleArrowClick = (dest) => {
    console.log('clicked')
    document.querySelector(dest).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  handleWindowScroll = () => {
    if (window.scrollY < 1500) {
      this.setState({
        rtt: false,
      })
    }
    if (window.scrollY > 1500) {
      this.setState({
        rtt: true,
      })
    }
  }


  render() {
    return (
      <div className="body-div">
        <div className="rtt" onClick={() => this.handleArrowClick('.landing-div')} style={this.state.rtt ? styles.arrowShow : styles.arrowHide}>
          <i className="fas fa-caret-square-up"></i>
        </div>
        <Landing/>
        <Info/>
        <Slide/>
        <Bio/>
        <Form/>
        <GoogleMap/>
      </div>
    );
  }
}


export default Body;