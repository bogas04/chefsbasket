import React from 'react';

export default class Subscribe extends React.Component {
  render() {
    let styles = {
      wrapper: {
        backgroundColor: '#FC5A46',
        color: 'white',
        fontSize: '150%',
        padding: '40px',
        marginTop: '20px',
      },
      input: {
        backgroundColor: '#FC5A46',
        color: '#FAFAFA',
        borderColor: '#FAFAFA',
      },
      btn: {
        color: '#FAFAFA',
        borderColor: '#FAFAFA',
        backgroundColor: '#FC5A46',
      }
    };
    return (
      <div style={styles.wrapper}>
        <form className="form form-inline">
          <div className="form-group" style={{width: '100%'}}>
            <label className="col-md-8" style={{fontWeight: 100}}>Get our latest recipes and expert tips right in your inbox</label>
            <div className="col-md-4 input-group">
              <input style={styles.input} type="email" className="form-control white-placeholder" placeholder="Your email address" />
              <span className="input-group-btn">
                <button style={styles.btn} className="btn btn-primary">SIGN UP</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
