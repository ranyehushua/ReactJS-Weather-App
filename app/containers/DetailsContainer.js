var React = require('react');
var Details = require('../components/Details');

var DetailsContainer = React.createClass({
  getInitialState() {
    return {
      forecast: this.props.location.state.forecast
    }
  },
  render: function() {
    console.log(this.state.forecast);
    return (
      <Details forecast={this.state.forecast}/>
    );
  }

});

module.exports = DetailsContainer;