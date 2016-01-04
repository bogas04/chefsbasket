# Chef's Basket
The website is built using React, Express, Stylus, Bootstrap and several other technologies.

# Usage
```bash
# This will build all files (`bower install`, `stylus` -> `css`, `/components` -> `bundle.js`) and start the server
npm start
# Now visit http://127.0.0.1:8080
```

# Todo
* [ ] Build tracking/logging services
* [ ] Implement all the layouts
* [ ] Make all components use data given from props
* [ ] Build up log-in system (username pass, fb, tw, google)
* [ ] Complete all APIs
* [ ] Find a smarter way to store tags of articles (Postgresql arrays?)
* [ ] Refactor components to use snake case instead of deep JSON objects (eg: `header_title` instead of `header.title`)
* [x] Use some file system for assets of dynamic data (using `client/public` for now)
* [x] Create admin panel to update data/add new entries
* [x] Use some database to store dynamic data (Postgres using Massive?)
* [x] Figure out server rendering using `react-dom/server`
* [x] Use stylus using webpack (cleaner code, auto-prefix loaders etc can save dev time)
