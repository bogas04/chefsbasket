import React from 'react';

export default ({ image, title, children }) => {
  let style = {
    mainWrapper: {
      background: `url('${image}') no-repeat fixed center center / cover`,
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
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
