import React, { Component, PropTypes } from 'react'

export default class TopNav extends Component {
  render () {
    const sectionsArray = ['Home', 'Appliance', 'Furniture', 'Electronics', 'Gaming', 'Music', 'Jewelry', 'Fashion', 'Automotive', 'Sports']
    const sections = sectionsArray.map((section) => {
      return <div style={{padding: 10}}>{section}</div>
    })
    return (
      <div style={{display: 'flex', 'flex-direction': 'row'}}>
        {sections}
      </div>
    )
  }
}
