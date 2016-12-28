var React = require('react');
var Details = require('../components/Details');

var DetailsContainer = React.createClass({

  render: function() {
    console.log(this.props);
    return (
      <Details />
    );
  }

});

module.exports = DetailsContainer;