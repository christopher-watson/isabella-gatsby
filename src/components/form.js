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
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23323232' fill-opacity='0.68' fill-rule='evenodd'/%3E%3C/svg%3E")`
  },
  formCont: {
    display: 'flex',
    flexDirection: 'column',
    width: '60vw',
    minWidth: 350,
    height: '100%',
    background: 'var(--white)',
    boxShadow: '1px 1px 50px 10px var(--dark)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  header: {
    dispay: 'grid',
    width: '100%',
    textAlign: 'center',
  },
  headerText: {
    fontSize: '3rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    color: 'var(--black)',
    letterSpacing: 1.5,
    textShadow: '3px 3px 3px var(--green)',
    marginBottom: 0,
  },
  headerPhone: {
    fontSize: '1.5rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    color: 'var(--green)',
    letterSpacing: 1.5,
    textShadow: '1px 1px 1px var(--black)',
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
    margin: '0 10px 20px 10px'
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
  },
  formLink: {
    color: 'var(--white)',
    textShadow: '2px 2px 15px var(--green)',
    padding: '0 15px'
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
            <a style={styles.headerPhone} href="tel:17325323337" onclick="ga('send', 'event', 'Phone Call Tracking', 'Click to Call', '732-532-3337', 0)">(732) 532-3337</a>
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