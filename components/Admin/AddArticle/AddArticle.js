import React from 'react';
import Content from '../../common/Content';
import Article from '../../common/Article';
import throttle from 'lodash.throttle';

export default class AddArticle extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      data: {
        header: {},
        author: {},
        category: 'recipes',
      }
    };
  }
  submit() {
    e.preventDefault();
    console.log(e);
  }
  update(type, e) {
    throttle((type, e) => {
      let { data } = this.state;
      console.log(e);
      switch(type) {
        case 'tags':
          data.tags = data.tags || [];
          // Unique elements
          data.tags = [...new Set(e.currentTarget.value.split(',').map(e => e.toUpperCase()))];
          break;
        case 'header.image':
          data.header = data.header || {};
          data.header.image = URL.createObjectURL(e.currentTarget.files[0]);
          console.log(data.header.image);
          break;
        default: 
          if(type.includes('.')) {
            data[type.split('.')[0]] = data[type.split('.')[0]] || {};
            data[type.split('.')[0]][type.split('.')[1]] = e.currentTarget.value;
          } else {
            data[type] = e.currentTarget.value;
          }
          break;
      }
      this.setState({ data });
    }, 50)(...arguments);
  }
  render() {
    return (
      <div>
        <Content>
          <h1> Add Page <a href="#preview" className="btn btn-default"> Preview </a></h1>
          <form onSubmit={e => this.submit(e)} action="/articles.json" method="post">
            <div className="form-group">
              <label>Header Details</label>
              <input onChange={e => this.update('header.title', e)} className="form-control" type="text" placeholder="Header Title" name="header.title"/>
              <textarea onChange={e => this.update('header.summary', e)} className="form-control" rows="3" placeholder="Header Summary" name="header.summary"></textarea>
              <input onChange={e => this.update('header.image', e)} type="file" name="header.image" />
              <div className="help-block">Header image 2000x500 px recommended</div>
              <input onChange={e => this.update('tags', e)} className="form-control" type="text" placeholder="Tag1,Tag2,..." name="tags"/>
            </div>
            <div className="form-group">
              <label>Article Details</label>
              <input onChange={e => this.update('title', e)} className="form-control" type="text" placeholder="Title" name="title"/>
              <select onChange={e => this.update('category', e)} className="form-control" name="category">
                <option value="recipes">Recipes</option>
                <option value="ingredients">Ingredients</option>
                <option value="people">People</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div className="row">
              <label>Author Details</label>
              <div className="form-group">
                <div className="col-md-6">
                  <input onChange={e => this.update('author.name', e)} className="form-control" type="text" placeholder="Author" name="author.name"/>
                </div>
                <div className="col-md-6">
                  <input onChange={e => this.update('author.url', e)} className="form-control" type="text" placeholder="Author URL" name="author.url"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Content</label>
              {
                this.state.data.category === 'recipes' ?
                  (
                    <div>
                      <div className="row">
                        <div className="col-md-6">
                          <input onChange={e => this.update('serves', e)} className="form-control" type="text" placeholder="Serves" name="serves"/>
                        </div>
                        <div className="col-md-6">
                          <input onChange={e => this.update('difficulty', e)} className="form-control" type="text" placeholder="Difficulty" name="difficulty"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <textarea onChange={e => this.update('ingredients', e)} className="form-control" rows="5" placeholder="Ingredients" name="ingredients"></textarea>
                        </div>
                        <div className="col-md-8">
                          <textarea onChange={e => this.update('procedure', e)} className="form-control" rows="5" placeholder="Procedure" name="procedure"></textarea>
                        </div>
                      </div>
                    </div>
                    ) : (
                    <textarea onChange={e => this.update('body', e)} className="form-control" rows="5" placeholder="Content" name="body"></textarea>
                    )
              }
            </div>
          </form>
        </Content>
        <h1 id="preview"> Live Render </h1>
        <Article loadStatic={true} data={this.state.data} default={<h3> Enter Details of the Post </h3>}/>
        <a href="#" className="btn">Continue Editing</a>
      </div>
    );
  }
}
