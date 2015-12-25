import React from 'react';
import CardList from '../CardList';

export default class Recipes extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.children || (
            <div className="container content">
              <h1> Recipes stuff </h1>
              <CardList dataSource='/data/cardlist.json' callToActions={[
                { action: e => console.log('doing stuff about it', e), 
                  text: 'Tweet It', glyphicon: 'retweet', className: 'btn btn-info'},
                  { action: e => console.log('doing stuff about it', e), 
                    text: 'Share on Facebook', glyphicon: 'share-alt', className: 'btn btn-primary'},
                    { action: e => console.log('doing stuff about it', e),
                      text: 'Pin It', glyphicon: 'pushpin', className: 'btn btn-danger'},
              ]} />
          </div>
          )
        }
      </div>
    );
  }
}
