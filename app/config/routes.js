import React from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Forecast from '../containers/ForecastContainer'

var routes = React.createClass({
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='forecast/:searchField' component={Forecast} />
          </Route>
        </Router>
    )
  }
});

module.exports = routes;