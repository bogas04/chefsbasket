import React from 'react';
import Content from '../../common/Content';

export default class AdminHome extends React.Component {
  render() {
    return (
      <Content>
        <div className="btn-group" role="group">
          <button className="btn btn-success">Add Article</button>
          <button className="btn btn-info">Edit Article</button>
          <button className="btn btn-danger">Delete Article</button>
        </div>
      </Content>
    );
  } 
}
