import React, { Component } from 'react'
import colors from "../styles/colors"
import CardLeft from './cardLeft'
import CardRight from './cardRight'

const styles = {
  info: {
    background: colors.dark,
    borderTop: `1px solid ${colors.white}`,
    borderBottom: `1px solid ${colors.white}`
  },
  divider: {
    borderTop: `1px solid ${colors.white}`,
  }
}

class Info extends Component {
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

  render () {
    return (
      <div className='info-div' style={styles.info}>
        <CardLeft 
          mobile={this.state.mobile}
          textOne='Maintain a Healthy Weight!'
          textTwo='Maintain a Healthy Weight!'
          textThree='Maintain a Healthy Weight!'
          heading='Nutrition'
          greenScript='Standard Meal Plan'
          paragraph='Sagittis dignissim ridiculus himenaeos tempus pellentesque tempor nisi netus nulla pretium gravida mauris morbi malesuada
          duis dictum aliquam arcu molestie'
          />
        
        <div className="divider" style={styles.divider}></div>
        
        <CardRight 
          mobile={this.state.mobile}
          textOne='Maintain a Healthy Weight!'
          textTwo='Maintain a Healthy Weight!'
          textThree='Maintain a Healthy Weight!'
          heading='Nutrition'
          greenScript='Standard Meal Plan'
          paragraph='Sagittis dignissim ridiculus himenaeos tempus pellentesque tempor nisi netus nulla pretium gravida mauris morbi malesuada
          duis dictum aliquam arcu molestie'
          />

        <div className="divider" style={styles.divider}></div>
        
        <CardLeft 
          mobile={this.state.mobile}
          textOne='Maintain a Healthy Weight!'
          textTwo='Maintain a Healthy Weight!'
          textThree='Maintain a Healthy Weight!'
          heading='Nutrition'
          greenScript='Standard Meal Plan'
          paragraph='Sagittis dignissim ridiculus himenaeos tempus pellentesque tempor nisi netus nulla pretium gravida mauris morbi malesuada
          duis dictum aliquam arcu molestie'
          />
      </div>
    );
  }
};

export default Info;