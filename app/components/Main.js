var React = require('react');
var Search = require('../containers/SearchContainer');

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <h1>ReactJS Weather App</h1>
            </div>
            <div className="navbar-right">
              <Search />
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;