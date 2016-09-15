"use strict";

//var Row = require('./Row')
// var Row = React.createClass({
//   render: function () {
//     return <tr style={{color: 'red'}}>{this.props.cells}</tr>
//   }
//
// })


var Table = React.createClass({
  displayName: "Table",

  render: function render() {
    var rows = this.props.data.map(function (row) {
      var cells = row.map(function (cell) {
        return React.createElement(
          "td",
          null,
          cell
        );
      });
      //      return null
      return React.createElement(Row, { cells: cells });
    });

    return React.createElement(
      "table",
      null,
      React.createElement(
        "tbody",
        null,
        rows
      )
    );
  }

});
