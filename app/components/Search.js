var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  input: {
    marginRight: '10px'
  }
}

function Search(props) {
  return (
    <div>
      <form className="form-inline" onSubmit={props.onSubmitUser}>
        <div className="form-group">
          <input type="text" className="form-control" style={styles.input} value={props.searchField} placeholder="Search Local Weather" onChange={props.onUpdateUser} />
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