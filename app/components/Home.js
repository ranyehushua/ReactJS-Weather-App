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
    top: 'calc(50% - 25px)',
    transform: 'translateY(-50%)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, .5)',
    background: 'rgba(50, 50, 50, .5)'
  },
  git: {
    position: 'relative'
  }
};

var Home = React.createClass({

  render: function() {
    return (
      <div style={styles.body}>
        <div className='jumbotron text-center col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3' style={styles.jumbo}>
          <Search />
        </div>
        
      </div>

    );
  }

});

module.exports = Home;