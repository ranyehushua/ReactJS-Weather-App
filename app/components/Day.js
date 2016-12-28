var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  day: {
    color: '#999',
    fontSize: '1.5em'
  }
}

var Day = React.createClass({
  propTypes: {
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="text-center" style={styles.day}>
        <img src={'http://openweathermap.org/img/w/' + this.props.icon + '.png'} />
        <p>{this.props.date}</p>
      </div>
    );
  }

});

module.exports = Day;