var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps () {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState () {
    return {
      text: this.props.text
    }
  },
  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        var temp = this.state.text;
        this.setState({
          text: temp + '.'
        })
      }
    }, this.props.speed);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render () {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }

});

module.exports = Loading;