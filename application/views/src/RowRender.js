import { Component } from 'react'

export default class RowRender extends Component {
  render () {
  //  console.log('call Row render', this.props)
  //  return <h1>{'sdfsdfsdf'}</h1>
    return <tr>{this.props.cells}</tr>
  }
}
