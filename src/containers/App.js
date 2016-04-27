import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'

require('../style/index.css')

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/counter'>Counter</Link>
            </li>
          </ul>
          <Paper>
            {this.props.children}
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}
