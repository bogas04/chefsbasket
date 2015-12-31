import React from 'react';
import Content from '../../common/Content';
import { Link } from 'react-router';

export default class AdminHome extends React.Component {
  render() {
    return (
      <Content>
        <div className="btn-group" role="group">
          <Link to={`/admin/article/add`} className="btn btn-success">Add Article</Link>
          <Link to={`/admin/article/modify`} className="btn btn-info">Edit Article</Link>
          <Link to={`/admin/article/delete`} className="btn btn-danger">Delete Article</Link>
        </div>
      </Content>
    );
  } 
}
