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
        <div className="col-md-4" key={e.slug} >
          <Link to={`/${e.category}/${e.slug}`} style={{textDecoration: 'none'}}>
            <ImageWrapper src={e.header.image} alt={e.title} height='260px' />
            <h2 style={{fontWeight: 100, textAlign: 'center'}} >{e.title}</h2>
            <h4 style={{fontWeight: 100, textAlign: 'center'}} >{e.author.name}</h4>
          </Link>
        </div>
      ))
    }));
  }
  getTopics(cb) {
    $.getJSON(`/articles.json?relatedTo=${this.props._for}`, data => {
      cb(data.data);
    });
  }
  render() {
    return (
      <div className="container">
        <Hr />
        <h1 style={{fontFamily: 'chardons', textAlign: 'center', fontWeight: 100}}> Related articles you may want to read </h1>
        {this.state.related}
      </div>
    );
  }
}

