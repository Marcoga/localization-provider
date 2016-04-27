import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import CounterApp from '../containers/CounterApp'
import Home from '../containers/Home'

export default (
  <Route path='/' component={App}>
    <Route path='home' component={Home} />
    <Route path='counter' component={CounterApp} />
  </Route>
)
