import React, { Component } from 'react';

const styles = {
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 0',
    backgroundColor: '#252525',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23323232' fill-opacity='0.86' fill-rule='evenodd'/%3E%3C/svg%3E")`
  },
  formCont: {
    display: 'flex',
    flexDirection: 'column',
    width: '60vw',
    minWidth: 350,
    height: '100%',
    background: 'var(--black)',
    boxShadow: '1px 1px 50px 10px var(--dark)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  header: {
    dispay: 'grid',
    width: '100%',
    textAlign: 'center',
  },
  headerText: {
    fontSize: '3rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    color: 'var(--white)',
    letterSpacing: 1.5,
    textShadow: '0 0 5px var(--dark)',
    marginBottom: 0,
    textDecoration: 'underline',
    textDecorationColor: 'var(--green)'
  },
  headerPhone: {
    color: 'var(--white)',
    fontFamily: 'Open Sans, Arial, sans-serif',
    letterSpacing: 1.5,
    padding: '5px 0',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  headerEmail: {
    color: 'var(--white)',
    fontFamily: 'Open Sans, Arial, sans-serif',
    letterSpacing: 1.5,
    padding: '5px 0',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  formTop: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 20px'
  },
  formTopMobile: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20 0'
  },
  input: {
    height: 40,
    borderRadius: 5,
    padding: '0 5px',
    margin: '0 10px 20px 10px',
    borderTop: '2px solid #9A9A9A',
    borderLeft: '2px solid #9A9A9A',
    borderBottom: '2px solid #EEEEEE',
    borderRight: '2px solid #EEEEEE',
  },
  formBottom: {
    padding: '0 28px',
  },
  textArea: {
    width: '100%',
    height: '100px',
    borderRadius: 5,
    resize: 'none',
    borderTop: '2px solid #9A9A9A',
    borderLeft: '2px solid #9A9A9A',
    borderBottom: '2px solid #EEEEEE',
    borderRight: '2px solid #EEEEEE',
    marginBottom: 10,
  },
  buttonDiv: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    padding: '10px 25px 0 0',
  },
  formSocial: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    padding: '10px 0',
    fontSize: '2rem',
    marginBottom: 5,
  },
  formLink: {
    color: 'var(--white)',
    padding: '0 15px'
  },
  phoneEmail: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  phoneEmailMobile: {
    display: 'flex',
    flexDirection: 'column',
  },

}

class Form extends Component {
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
      <div className="form" style={styles.formDiv}>
        <div className="form-container" style={styles.formCont}>
          <div className="form-heading" style={styles.header}>
            <h2 style={styles.headerText}>Contact Us!</h2>
            <div className="phoneEmail" style={this.state.mobile ? styles.phoneEmailMobile : styles.phoneEmail }>
              {/* <a style={styles.headerPhone} href="tel:17325323337" onClick={ga('send', 'event', 'Phone Call Tracking', 'Click to Call', '732-532-3337', 0)}>(732) 532-3337</a> */}
              <a style={styles.headerPhone} href="tel:17325323337">(732) 532-3337</a>
              <span style={this.state.mobile ? {display: 'none'} : {color: 'var(--green)', padding: '0 10px' }}> | </span>
              <a style={styles.headerEmail} href='mailto:contact@isabellafitness.com?subject=Sign Me Up!'>contact@isabellafitness.com</a>
            </div>
            <div className="form-social" style={styles.formSocial}>
              <a className="form-link" href="https://www.facebook.com/IsabellaFitness/" target="_blank" rel="noopener noreferrer" style={styles.formLink}>
                <span title="Facebook">
                  <i className="fab fa-facebook-square" alt="facebook" />
                </span>
              </a>
              <a className="form-link" href="https://twitter.com/IsabellaFitness" target="_blank" rel="noopener noreferrer" style={styles.formLink}>
                <span title="Twitter">
                  <i className="fab fa-twitter" alt="twitter" />
                </span>
              </a>
              <a className="form-link" href="https://www.instagram.com/isabella_fitness_/" target="_blank" rel="noopener noreferrer" style={styles.formLink}>
                <span title="Instagram">
                  <i className="fab fa-instagram" alt="instagram" />
                </span>
              </a>
              <a className="form-link" href="https://www.youtube.com/user/Bennyboi37" target="_blank" rel="noopener noreferrer" style={styles.formLink}>
                <span title="Youtube">
                  <i className="fab fa-youtube" alt="Youtube" />
                </span>
              </a>
            </div>
          </div>
          <div className="form" style={styles.form}>
            <form name="IsabellaFit-ContactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action='thankYou'>
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-top" style={this.state.mobile ? styles.formTopMobile : styles.formTop}>
                <input type="hidden" name="bot-field" />
                <input style={styles.input} placeholder='Name' type="text" name="name" />
                <input style={styles.input} placeholder='Email' type="email" name="email" />
              </div>
              <div className="form-bottom" style={styles.formBottom}>
                <textarea placeholder='Message' name="message" style={styles.textArea}></textarea>
              </div>
              <div className="button-div" style={styles.buttonDiv}>
                <button className='form-button' style={styles.button} type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;