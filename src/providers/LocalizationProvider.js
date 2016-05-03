import React, { Component, Children, PropTypes } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import de from 'react-intl/locale-data/de'
import es from 'react-intl/locale-data/es'

addLocaleData([...en, ...de, ...es])

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
      <IntlProvider locale={this.props.lang}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
