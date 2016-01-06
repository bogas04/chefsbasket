# Chef's Basket
Technology stack: 
## Frontend
* ReactJS
* Bootstrap
* stylus

## Backend
* NodeJS
* ExpressJS
* Passport

## Tools
* gulp
* webpack 
* babel
* bower

## Database
* Postgresql

# Usage
```bash
# Install dependencies
npm i
# In development, fire up build processes and start server by
gulp
# In production, Procfile is used which basically calls gulp's production task
gulp production
# Now visit http://127.0.0.1:8080
```

# Todo
* [ ] Deploy at scale
* [ ] Build tracking/logging services
* [ ] Design Polish, Optimize Components, Database indexes, use `componentShouldUpdate` 
* [ ] Complete all APIs
  * [ ] Make API usable by an app
  * [x] Build up log-in system using passport
* [x] Find a smarter way to store tags of articles (Postgresql arrays?)
* [x] Refactor components to use snake case instead of deep JSON objects (eg: `header_title` instead of `header.title`)
* [x] Use some file system for assets of dynamic data (using `client/public` for now)
* [x] Create admin panel to update data/add new entries
* [x] Use some database to store dynamic data (Postgres using Massive?)
* [x] Figure out server rendering using `react-dom/server`
* [x] Use stylus using webpack (cleaner code, auto-prefix loaders etc can save dev time)
