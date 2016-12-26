var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var Day = require('./Day');

var Forecast = React.createClass({
  propTypes: {
    forecastInfo: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  },
  render: function() {
    return this.props.isLoading === true
    ? <Loading speed={500} text="One Moment Please" />
    : ( <div>
          <h1 className='text-center'>{this.props.forecastInfo[0]}</h1>
          <h3 className='text-center'>Select a Day</h3>
          <div>
            {this.props.forecastInfo.map((day, i) => {
              if (i !== 0) {
                return <Day icon={day.icon} date={day.date} key={i} />
              }
            })}
          </div>
        </div>
      )
  
  }

});

module.exports = Forecast;