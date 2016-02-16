import React from 'react';
import Content from '../../common/Content';
import Article from '../../common/Article';
import throttle from 'lodash.throttle';

export default class AddArticle extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      data: {
        title: '',
        slug: '',
        header_image: '',
        header_summary: '',
        header_title: '',
        author_name: 'STAFF EDITOR',
        author_url: '',
        body: '',
        ingredients: '',
        procedure: '',
        category: 'recipes',
        tags: [],
      }
    };
  }
  submit(e) {
    e.preventDefault();

    // TODO: Do validation check
    let { data } = this.state.data;
    for (let key in data) {
      if (typeof data[key] !== 'object') {
        if (data[key].length === 0) {
          return alert('Fill the form completely');
        }
      }
    }

    fetch('/articles.json', {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(this.state.data)
    })
    .then(e => e.json())
    .then(e => alert(e.msg))
    .catch(e => console.log(e));
  }
  update(type, e) {
    throttle((type, e) => {
      let { data } = this.state;
      switch(type) {
        case 'tags':
          // Unique elements
          data.tags = [...new Set(e.currentTarget.value.split(',').map(e => e.toUpperCase().trim()))];
          break;
        case 'header_image':
          let fr = new FileReader();
          fr.onload = _e => {
            let { data } = this.state;
            data.header_image = _e.target.result;
            this.setState({ data });
          };
          fr.readAsDataURL(e.currentTarget.files[0]);
          this.setState({ imagePreview: URL.createObjectURL(e.currentTarget.files[0])});
          break;
        case 'title':
          data.title = e.currentTarget.value;
          // replace space with -, remove the/a for better SEO, convert to lower case
          data.slug = data.title.toLowerCase().replace(/ /g, '-').replace(/(^the |^a | a | the )/g, '');
          break;
        default: 
          if(type.indexOf('.') > -1) {
            data[type.split('.')[0]] = data[type.split('.')[0]] || {};
            data[type.split('.')[0]][type.split('.')[1]] = e.currentTarget.value;
          } else {
            data[type] = e.currentTarget.value;
          }
          break;
      }
      this.setState({ data });
    }, 50)(type, e);
  }
  render() {
    let form = (
      <form name="add-article"  onSubmit={e => this.submit(e)} action="/articles.json" method="post">

        <div className="form-group">
          <label>Header Details</label>
          <div className="row">
            <div className="col-md-4">
              <input onChange={e => this.update('header_image', e)} name="header_image"  type="file" accept="image/*" className="form-control" />
              <div className="help-block">Header image 2000x500 px recommended</div>
            </div>
            <div className="col-md-8">
              <input onChange={e => this.update('header_title', e)} placeholder="Header Title" className="form-control" name="header_title"  type="text" />
              <textarea onChange={e => this.update('header_summary', e)} placeholder="Header Summary" className="form-control"
                name="header_summary"  rows="3"></textarea>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Article Title</label>
          <input onChange={e => this.update('title', e)} className="form-control" type="text" placeholder="Title" name="title"/>
          <p className="help-block">{this.state.data.title.length > 0 && <span>Your URL would look like : <code>chefsbasket.com/{this.state.data.slug}</code></span>}</p>

          <div className="row">
            <div className="col-md-6">
              <label> Category </label>
              <select onChange={e => this.update('category', e)} className="form-control"  name="category">
                <option value="recipes">Recipes</option>
                <option value="ingredients">Ingredients</option>
                <option value="people">People</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <div className="col-md-6">
              <label> Tags </label>
              <input onChange={e => this.update('tags', e)} className="form-control" type="text" placeholder="Tag1,Tag2,..." name="tags" />
            </div>
          </div>
          {
            this.state.data.category === 'recipes' && <div className="row">
              <div className="col-md-6">
                <label> Serves </label>
                <input  onChange={e => this.update('serves', e)} className="form-control" type="text" placeholder="Serves" name="serves"/>
              </div>
              <div className="col-md-6">
                <label> Difficulty </label>
                <input  onChange={e => this.update('difficulty', e)} className="form-control" type="text" placeholder="Difficulty" name="difficulty"/>
              </div>
            </div>}
          </div>

          <div className="form-group">
            <label>Author Details</label>
            <div className="row">
              <div className="col-md-6">
                <input  onChange={e => this.update('author_name', e)} className="form-control" type="text" placeholder="Author" name="author_name"/>
              </div>
              <div className="col-md-6">
                <input  onChange={e => this.update('author_url', e)} className="form-control" type="text" placeholder="Author URL" name="author_url"/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Content</label>
            <h5> Use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">markdown</a> for formatting text </h5>
            {
              this.state.data.category === 'recipes' ?
                (
                  <div className="row">
                    <div className="col-md-4">
                      <label> Ingredients </label>
                      <textarea  onChange={e => this.update('ingredients', e)} className="form-control" rows="10"
                        placeholder="* Onions &#13;&#10;* Bell pepper ..." name="ingredients"></textarea>
                    </div>
                    <div className="col-md-8">
                      <label> Procedure </label>
                      <textarea  onChange={e => this.update('procedure', e)} className="form-control" rows="10"
                        placeholder="# Step 1 &#13;&#10;Saute chopped onions" name="procedure"></textarea>
                    </div>
                  </div>
                  ) : (
                  <div className="form-group">
                    <label> Article body </label>
                    <textarea  onChange={e => this.update('body', e)} className="form-control" rows="10"
                      placeholder="Content" name="body"></textarea>
                  </div>
                  )
            }
          </div>
          <button className="btn btn-default">Add Article</button>
        </form>
    );

    return (
      <div>
        <Content>
          <h1> Add Page <a href="#preview" className="btn btn-default"> Preview </a></h1>
          {form}
        </Content>

        <h1 > Live Render </h1>

        <Article 
          loadStatic={true}
          data={ Object.assign({}, this.state.data, { header_image_url: this.state.imagePreview }) }
          default={<h3> Enter Details of the Post </h3>}
        />

      <a href="#" className="btn">Continue Editing</a>
    </div>
    );
  }
}
