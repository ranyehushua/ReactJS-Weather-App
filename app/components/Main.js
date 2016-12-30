var React = require('react');
var Search = require('../containers/SearchContainer');
import { Link } from 'react-router';

var Main = React.createClass({
  //lineHeight of 50px is assigned to the Search component below, in order to vertically align within 50px navbar height
  render: function() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top" style={{marginBottom: '0px', minWidth: '230px'}}>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">ReactJS Weather</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <div className="navbar-right">
                <div style={{lineHeight: '50px'}}>
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;