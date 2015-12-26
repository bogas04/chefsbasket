import React from 'react';
import Hr from '../Hr';
import ImageWrapper from '../ImageWrapper';
import { Link } from 'react-router';

export default class Related extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      related: []
    };
  }
  componentWillMount() {
    this.getTopics(arr => this.setState({
      related: arr.map(e => (
        <div className="col-md-4" key={e.recipeId} >
          <Link to={`/recipes/${e.recipeId}`} style={{textDecoration: 'none'}}>
            <ImageWrapper src={e.image} alt={e.title} height='260px' />
            <h2 style={{fontWeight: 100, textAlign: 'center'}} >{e.title}</h2>
            <h4 style={{fontWeight: 100, textAlign: 'center'}} >{e.author}</h4>
          </Link>
        </div>
      ))
    }));
  }
  getTopics(cb) {
    // TODO: server call to get related topics to this.props.forRecipeId
    cb([
      { image: '/img/pizza.jpg', title: 'Are these the Best Pizzas Ever?', author: 'John Oliver', recipeId: 'More tasty stuff' },
      { image: '/img/pizza.jpg', title: 'Are these the Best Pizzas Ever?', author: 'John Oliver', recipeId: 'Something good' },
      { image: '/img/pizza.jpg', title: 'Are these the Best Pizzas Ever?', author: 'John Oliver', recipeId: 'Yolo so eat stuff' },
    ]);
  }
  render() {
    return (
      <div className="container">
        <Hr />
        <h1 style={{fontFamily: 'chardons', textAlign: 'center', fontWeight: 100}}> Related recipes you may want to try </h1>
        {this.state.related}
      </div>
    );
  }
}

