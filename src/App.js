import React, { Component } from 'react';
import RoutAuth from './utils/Auth';

import { HashRouter as Router,Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <RoutAuth path/>
        </Switch>
      </Router>
    )
  }
}