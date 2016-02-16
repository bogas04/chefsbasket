import React from 'react';
import Hr from '../../common/Hr';
import Content from '../../common/Content';

export default ({  }) => {
  let styles = {
    ribbon: {
      backgroundColor: '#252525',
      color: '#fafafa',
      padding: '10px',
    }
  };
  return (
    <Content>
      <h1> RecipeKit </h1>
      <p> Check our products on <a href="http://www.amazon.in/Chefs-Basket/b/ref=bl_dp_s_web_5522918031?ie=UTF8&node=5522918031&field-lbr_brands_browse-bin=Chef%27s+Basket" target="_blank">
          <span className="glyphicon glyphicon-new-window"></span> Amazon.in
        </a>
      </p>
      <div className="text-center">
        <h3 style={styles.ribbon}> Mexican Series </h3>
        <div className="row">
          <div className="col-md-12">
            <img src="/img/black-bean.png" />
            <div>Black Bean Burritos</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 style={styles.ribbon}> Italian Series </h3>
        <div className="row">
          <div className="col-md-2">
            <img src="/img/creamy-tomato.png" />
            <div>Creamy Tomato</div>
          </div>
          <div className="col-md-2">
            <img src="/img/alfredo.png" />
            <div>Alfredo</div>
          </div>
          <div className="col-md-6">
            <img src="/img/olive-basil.png" />
            <div>Olive Basil Pesto</div>
          </div>
          <div className="col-md-2">
            <img src="/img/arrabbaita.png" />
            <div>Arrabbiata</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 style={styles.ribbon}> Thai Series </h3>
        <div className="row">
          <div className="col-md-12">
            <img src="/img/green-curry.png" />
            <div>Thai Green Curry</div>
          </div>
        </div>
      </div>

      <Hr />

      <h1> Explorer Series </h1>
      <div className="text-center">
        <h3 style={styles.ribbon}>Explorer</h3>
        <div className="row">
          <div className="col-md-4">
            <img src="/img/arrabbaita_explorer.png" />
            <div>Arrabbiata</div>
          </div>
          <div className="col-md-4">
            <img src="/img/creamy-tomato_explorer.png" />
            <div>Creamy Tomato</div>
          </div>
          <div className="col-md-4">
            <img src="/img/alfredo_explorer.png" />
            <div>Alfredo</div>
          </div>
        </div>
      </div>
    </Content>
  );
}
