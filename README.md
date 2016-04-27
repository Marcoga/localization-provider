# Redux boilerplate project
Even though there are many many redux boilerplates repos out there, none of them quite matches my needs.

## What is included?
* React
* ReactDom
* react-router
* redux-react-router
* material-ui
* Babel
 * with decorators
 * see .babelrc for details
* babel-eslint
* Development Server (for hot reloading)
* React Hot Loader 3
* It uses the Chrome Redux Devtools Extension

## Todo
* [ ] include routes
* [ ] include redux-react-router reducer

## Discussion
### Should it include Bootstrap?
Most of my needs are met with ```material-ui``` and css, however there might be some cases where bootstrap is actually usefull, for example for tables, tabs (I'm not yet quite sold on the ```material-ui``` tabs), wells, ...

I am currently trending to publishing my own lib with the bootstrap components that I need. In this lib I could use the ```saas``` parts of bootstrap that I need.
