//var Row = require('./Row')
// var Row = React.createClass({
//   render: function () {
//     return <tr style={{color: 'red'}}>{this.props.cells}</tr>
//   }
//
// })


const Table = React.createClass({
  render: function () {
    var rows = this.props.data.map(function (row) {
      var cells = row.map(function(cell) {
        return <td>{cell}</td>
      });
//      return null
      return <Row cells={cells}/>
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

});
