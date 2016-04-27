import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <AppContainer
    component={Root}
    props={{ store, history }}
  />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(
      <AppContainer
        component={require('./containers/Root').default}
        props={{ store }}
      />,
      document.getElementById('root')
    )
  })
}
