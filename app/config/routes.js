import React from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Forecast from '../containers/ForecastContainer'
import Details from '../containers/DetailsContainer'

var routes = React.createClass({
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='forecast/:searchField' component={Forecast} />
            <Route path='details/:searchField' component={Details} />
          </Route>
        </Router>
    )
  }
});

module.exports = routes;