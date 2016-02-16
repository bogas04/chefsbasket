import React from 'react';

export default ({  }) => {
  let styles = {
    btn: {
      margin: '5px 20px',
      fontSize: '120%',
      padding: '5px 20px',
    },
    heading: {
      backgroundColor: '#252525',
      color: '#fafafa',
      display: 'inline-block',
      padding: '5px 20px',
      marginTop: 0,
    }
  };
  return (
    <div className="text-center">
      <h1 style={{fontFamily: 'chardons', fontWeight: '100'}}>Would you cook?</h1>
      <div className="container">
        <div className="col-md-7">
          <div className="image-wrapper">
            <img src="/img/burritos.jpg" alt="Mexican Burrito" />
          </div>
        </div>
        <div className="col-md-5" style={{}}>
          <h2 style={styles.heading}>Mexican Burrito</h2>
          <p style={{fontSize: '140%', textAlign: 'left'}}> A burrito is a type of Mexican and Tex-Mex food, consisting of a wheat flour tortilla wrapped or folded into a cylindrical shape to completely enclose the filling (in contrast to a taco, which is generally formed by simply folding a tortilla in half around a filling, leaving the semicircular perimeter open). The flour tortilla is usually lightly grilled or steamed, to soften it and make it more pliable. </p>
          <button style={styles.btn} className="btn btn-success">Yes</button>
          <button style={styles.btn} className="btn btn-primary">No</button>
        </div>
      </div>
    </div>
  );
}
