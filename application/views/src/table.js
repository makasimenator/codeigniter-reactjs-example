import AppBar  from 'material-ui/AppBar'
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme  from 'material-ui/styles/getMuiTheme'
import { Component } from 'react'
import RowRender  from './RowRender'

const theme = getMuiTheme({
    palette: {
//      primary1Color: '#f4511e'
    }
})

class App extends Component {

  render () {
    const rows = this.props.data.map(function (row) {
      var cells = row.map(function(cell) {
        return <TableRowColumn>{cell}</TableRowColumn>
      })
      return <RowRender cells={cells}/>
    })

    return (
      <MuiThemeProvider muiTheme={theme}>
        <section>
          <AppBar
            title='This page was built using ReactJS'
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
    )
  }

}

global.App = App
