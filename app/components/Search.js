var React = require('react');
var PropTypes = React.PropTypes;

function Search(props) {
  return (
    <div>
      <form className="form-inline" onSubmit={props.onSubmitUser}>
        <div className="form-group">
          <input type="text" className="form-control" value={props.searchField} placeholder="Search Local Weather" onChange={props.onUpdateUser} />
        </div>
        <button type="submit" className="btn btn-success">Get Weather</button>
      </form>
    </div>
  )
}

Search.propTypes = {
  searchField: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired
}


module.exports = Search;