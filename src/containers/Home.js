import React, { Component } from 'react'
import LocalizedText from '../components/LocalizedText'

export default class Home extends Component {
  render() {
    return (
      <div>
        this is a localizedText:
        <LocalizedText textKey='translation' />
      </div>
    )
  }
}
