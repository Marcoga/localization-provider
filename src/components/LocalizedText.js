import React, { Component, PropTypes } from 'react'

const KeyNotFound = ({textKey}) => (
  <span
    title={`Check if the key: ${textKey} is in the server translations file`}
    style={{
      color: 'red',
      cursor: 'help'
    }}>
    <strong>{textKey}:</strong> Not found in translations texts
  </span>
)

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

    const textObj = texts[this.props.textKey]

    return (
      <span>
        {textObj && textObj[lang] ?
          textObj[lang]
          : <KeyNotFound textKey={this.props.textKey} />
        }
      </span>
    )
  }
}
