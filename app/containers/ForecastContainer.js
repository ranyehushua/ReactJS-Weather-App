var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelper = require('../utils/weatherHelper');
var axios = require('axios');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      isLoading: true,
      forecastInfo: []
    }
  },
  componentDidMount() {
    var location = this.props.location.state.searchField;
    weatherHelper.getForecast(location)
      .then((val) => {
        console.log(val);
        this.setState({
          isLoading: false,
          forecastInfo: val
        })
      })
      .catch((err) => console.log(err));


  },
  render: function() {
    return (
      <Forecast 
        isLoading = {this.state.isLoading}
        forecastInfo = {this.state.forecastInfo}
      />
    );
  }

});

module.exports = ForecastContainer;