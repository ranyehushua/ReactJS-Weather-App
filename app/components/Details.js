var React = require('react');
var Day = require('./Day.js');
var PropTypes = React.PropTypes;

function capitalizeFirst (string) {
  var split = string.split(' ');
  var transform = split.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return transform.join(' ');
}

var styles = {
  text: {
    fontSize: '1.1em',
    color: '#0CC'
  },
  wrapper: {
    paddingTop: '30px'
  }
}

var Details = React.createClass({
  propTypes: {
    forecast: PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className='text-center' style={styles.wrapper}>
        <Day icon={this.props.forecast.icon} date={this.props.forecast.date} />
        <div style={styles.text}>
          <p>{this.props.forecast.city}</p>
          <p>{capitalizeFirst(this.props.forecast.desc)}</p>
          <p>Min Temp: {Math.round(this.props.forecast.min)}&deg; F</p>
          <p>Max Temp: {Math.round(this.props.forecast.max)}&deg; F</p>
          <p>Humidity: {this.props.forecast.humidity}</p>
        </div>
      </div>
    );
  }

});

module.exports = Details;