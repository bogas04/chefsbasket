import React from 'react';

export default class Banner extends React.Component {
  render() {
    let style = {
      mainWrapper: {
        background: `url('/img/banner.jpg') no-repeat center center fixed`,
        backgroundSize: `cover`,
        //boxShadow: '0 -20px 200px 10px #252525 inset',
        color: 'white',
        height: '64vh',
        minHeight: '500px',
      },
      textWrapper: {
        backgroundColor: 'white',
        color: '#252525',
      },
      text: {
        margin: '15px 0',
        border: '2px solid #252525',
        textAlign: 'center',
        padding: '10px',
      }
    };
    return (
      <div className="jumbotron" style={style.mainWrapper}>
        <div className="container">
          <div className="col-md-offset-8 col-md-4" style={style.textWrapper}>
            <div style={style.text}>
              <h2>{this.props.title}</h2>
              <p>{this.props.children}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
