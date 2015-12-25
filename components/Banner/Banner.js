import React from 'react';

export default class Banner extends React.Component {
  render() {
    let style = {
      mainWrapper: {
        background: `url('/img/banner.jpg') no-repeat center center fixed`,
        backgroundSize: `cover`,
        color: 'white',
        height: '64vh',
        minHeight: '500px',
      },
      textWrapper: {
        backgroundColor: 'white',
        color: '#252525',
        padding: '10px',
      },
      text: {
        border: '2px solid #252525',
        textAlign: 'center',
      }
    };
    return (
      <div className="jumbotron" style={style.mainWrapper}>
        <div className="container">
          <div className="col-md-offset-8 col-md-4" style={style.textWrapper}>
            <div style={style.text}>
              <h2>{this.props.title}</h2>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
