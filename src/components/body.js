import React, { Component } from 'react';
import Landing from "./landing"


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
      </div>
    );
  }
}


export default Body;