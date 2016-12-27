var React = require('react');
var Search = require('../containers/SearchContainer');
var image = require('../img/background.jpg')

var styles = {
  body: {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    backgroundPosition: 'center'
  }
}

var Home = React.createClass({

  render: function() {
    return (
      <div style={styles.body} >
        <div className='jumbotron text-center'>
          <Search />
        </div>
      </div>
    );
  }

});

module.exports = Home;