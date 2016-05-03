import React, { Component, PropTypes } from 'react'

export default class LocalizedText extends Component {
  static contextTypes = {
    texts: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
  }

  static propTypes = {
    textKey: PropTypes.string.isRequired
  }

  render() {
    const {
      texts,
      lang
    } = this.context

    return (
      <span>
        {texts[this.props.textKey][lang]}
      </span>
    )
  }
}
