import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timeline from '../pages/Timeline'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Timeline />
      </Route>
    </Switch>
  </Router>
)

export default Routes
