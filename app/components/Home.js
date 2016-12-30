var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('../containers/SearchContainer');
var image = 'app/img/background.jpg';

var styles = {
  body: {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
  },
  jumbo: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  git: {
    position: 'relative'
  }
};

var Home = React.createClass({

  render: function() {
    return (
      <div style={styles.body}>
        <div className='jumbotron text-center col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2' style={styles.jumbo}>
          <Search />
        </div>
        
      </div>

    );
  }

});

module.exports = Home;