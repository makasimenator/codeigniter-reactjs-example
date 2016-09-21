import AppBar from 'material-ui/AppBar'
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import React, { Component, PropTypes } from 'react'
import RowRender from './RowRender'

import TopNav from './TopNav'

const theme = getMuiTheme({
  palette: {
//      primary1Color: '#f4511e'
  }
})

class Main extends Component {

  render () {
    const rows = this.props.data.map((row) => {
      const cells = row.map((cell) => {
        return <TableRowColumn>{cell}</TableRowColumn>
      })
      return <RowRender cells={cells}/>
    })

    return (
      <div>
        <TopNav />
        <MuiThemeProvider muiTheme={theme}>
          <section>
            <AppBar
              title='This page was built using ReactJS views (& Codeigniter)'
              iconClassNameRight='muidocs-icon-navigation-expand-more'
              style={{fontSize: 14}}
              />

            <Table>
              <TableBody>
                {rows}
              </TableBody>
            </Table>
          </section>
        </MuiThemeProvider>
      </div>
    )
  }

}

global.Main = Main
