var React = require('react');
var createClass = require('react-create-class');

module.exports = function(mockTagName: string){
  return createClass({
    render: function() {
      var mockTagName = mockTagName || "div";
      return React.DOM[mockTagName](null, this.props.children);
    }
  });
};
