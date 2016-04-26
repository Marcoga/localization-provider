import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions'

@connect(state => ({
  counter: state.counter
}), CounterActions)
export default class CounterApp extends Component {
  render() {
    const {
      counter,
      increment,
      decrement,
      incrementIfOdd
    } = this.props

    return (
      <Counter
        counter={counter}
        increment={increment}
        decrement={decrement}
        incrementIfOdd={incrementIfOdd}
      />
    )
  }
}
