import React, { Component, PropTypes } from 'react'

export default class RowRender extends Component {
  render () {
    return <tr>{this.props.cells}</tr>
  }
}
