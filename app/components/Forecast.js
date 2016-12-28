var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var Day = require('./Day');

var styles = {
  days: {
    display: 'inline-block',
    padding: '10px',
    margin: '5px'
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer'
  }
}

var Forecast = React.createClass({
  propTypes: {
    forecastInfo: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getDetails: PropTypes.func.isRequired
  },
  render: function() {
    return this.props.isLoading === true
    ? <Loading speed={500} text="One Moment Please" />
    : ( <div>
          <h1 className='text-center'>{this.props.forecastInfo[0]}</h1>
          <h3 className='text-center'>Select a Day</h3>
          <div className="text-center">
            {this.props.forecastInfo.map((day, i) => {
              if (i !== 0) {
                return (
                  <div style={styles.days} key={i}>
                    <a style={styles.link} onClick={this.props.getDetails.bind(null, day)} key={i}><Day icon={day.icon} date={day.date} key={i} /></a>
                  </div>
                )
              }
            })}
          </div>
        </div>
      )
  
  }

});

module.exports = Forecast;