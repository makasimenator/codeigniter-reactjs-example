"use strict";

/**!
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
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

      return React.createElement(
        "tr",
        null,
        cells
      );
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
