var React = require('react');
var Search = require('../containers/SearchContainer');

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar=brand">
                <h1>ReactJS Weather App</h1>
              </div>
            </div>
            <Search />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;