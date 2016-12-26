var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      searchField: ''
    }
  },
  handleUpdateUser(e) {
    this.setState({
      searchField: e.target.value
    })
  },
  handleSubmitUser(e) {
    e.preventDefault();
    var searchField = this.state.searchField;
    this.setState({
      searchField: ''
    });
    
    if (searchField.length > 0 && searchField !== this.context.router.params.searchField) {
      this.context.router.replace({
        pathname: '/forecast/' + this.state.searchField,
        state: {
          searchField: searchField
        }
      });
    }
  },
  render () {
    return (
      <Search 
        onUpdateUser={this.handleUpdateUser}
        onSubmitUser={this.handleSubmitUser}
        searchField={this.state.searchField}
      />
    );
  }

});

module.exports = SearchContainer;