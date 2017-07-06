import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Girls from './Girls'
import Boys from './Boys'
import Boy from './Boy'
import Home from './Home'
 
module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/boys" component={Boys}>
      <Route path="/boys/:boyName" component={Boy}/>
    </Route>
    <Route path="/girls" component={Girls}/>
  </Route>
)