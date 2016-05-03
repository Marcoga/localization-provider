import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocalizationProvider from '../providers/LocalizationProvider'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'

require('../style/index.css')

export default class App extends Component {
  render() {
    const {
      params: { lang },
      children
    } = this.props

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <LocalizationProvider
            texts={{
              translation: {
                'en': 'english translation',
                'es': 'esto es español'
              }
            }}
            lang={lang}>
            <div>
              <Link to={`${lang}/home`}>Home</Link>
              <Paper>
                {children}
              </Paper>
            </div>
          </LocalizationProvider>
        </MuiThemeProvider>
    )
  }
}
