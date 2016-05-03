import React, { Component, Children, PropTypes } from 'react'

export default class LocalizationProvider extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    texts: PropTypes.object.isRequired,
  }

  static childContextTypes = {
      texts: PropTypes.object.isRequired,
      lang: PropTypes.string.isRequired,
  }

  constructor(props, context) {
    super(props, context)
  }

  getChildContext() {
    return {
      texts: this.props.texts,
      lang: this.props.lang
    }
  }

  render() {
    return (
      Children.only(this.props.children)
    )
  }
}
