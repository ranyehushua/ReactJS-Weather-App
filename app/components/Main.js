var React = require('react');
var Search = require('../containers/SearchContainer');
import { Link } from 'react-router';

var styles = {
  alignSearch: {
    lineHeight: '50px'
  },
  navbar: {
    marginBottom: '0px',
    minWidth: '230px'
  },
  footer: {
    height: '50px',
    lineHeight: '50px',
    color: '#9D9D9D'
  }
}

var Main = React.createClass({
  //lineHeight of 50px is assigned to the Search component below, in order to vertically align within 50px navbar height
  render: function() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top" style={styles.navbar}>
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
                <div style={styles.alignSearch}>
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
        <footer className="navbar-fixed-bottom text-center navbar-inverse" style={styles.footer}>
          Find the source for this project on my <a href="https://github.com/ranyehushua">Github</a>
        </footer>
      </div>
    );
  }

});

module.exports = Main;