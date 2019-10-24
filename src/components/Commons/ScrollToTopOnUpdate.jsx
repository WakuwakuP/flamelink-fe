import React from 'react'

export default class ScrollToTopOnUpdate extends React.Component {
  componentWillUpdate(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}
