import React, { Component } from 'react'
import LocalizedText from '../components/LocalizedText'
import LocalizedNumber from '../components/LocalizedNumber'
import LocalizedDate from '../components/LocalizedDate'

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>
          <span>this is a localizedText: </span>
          <LocalizedText textKey='translation' />
        </p>
        <p>
          <span>and this is a LocalizedNumber: </span>
          <LocalizedNumber value={2000000000000} />
        </p>
        <p>
          <span>and this is a LocalizedDate: </span>
          <LocalizedDate date={new Date()} />
        </p>
      </div>
    )
  }
}
