import React, { Component } from 'react';
import Landing from "./landing"
import Info from "../components/info"
import Slide from "../components/slide"
import Bio from "../components/bio"
import GoogleMap from "../components/GoogleMap"


class Body extends Component {
  state = { 
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }

  render() {
    return (
      <div>
        <Landing/>
        <Info/>
        <Slide/>
        <Bio/>
        <GoogleMap/>
      </div>
    );
  }
}


export default Body;