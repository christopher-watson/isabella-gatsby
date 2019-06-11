import React from 'react';

const styles = {
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#252525',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23323232' fill-opacity='0.68' fill-rule='evenodd'/%3E%3C/svg%3E")`
  },
  formCont: {
    display: 'flex',
    flexDirection: 'column',
    width: '60vw',
    minWidth: 500,
    height: '100%',
    background: 'var(--white)',
    boxShadow: '1px 1px 50px 10px var(--dark)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  headerText: {
    fontSize: '3rem',
    fontFamily: 'Alfa Slab One, sans-serif',
    color: 'var(--dark)',
    letterSpacing: 1.5,
    textShadow: '3px 3px 3px var(--green)'
  },
  formTop: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 20px'
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
}

const Form = () => {
  return (
    <div style={styles.formDiv}>
      <div className="form-container" style={styles.formCont}>
        <div className="form-heading" style={styles.header}>
          <h2 style={styles.headerText}>Contact Us!</h2>
        </div>
        <div className="form" style={styles.form}>
          <form name="contact" method="POST" data-netlify="true" action='thankYou' style={styles.form}>
            <div className="form-top" style={styles.formTop}>
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
};

export default Form;