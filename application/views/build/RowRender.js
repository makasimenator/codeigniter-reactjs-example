"use strict";

var Row = React.createClass({
  displayName: "Row",

  render: function render() {
    return React.createElement(
      "tr",
      null,
      this.props.cells
    );
  }

});
