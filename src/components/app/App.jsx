/* eslint-disable max-len */
import React from 'react';
import Xfiles from '../../containers/Xfiles';
import XfilesDetails from '../../containers/XfilesDetails';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return <div>
    <h1>The Truth is Here</h1>
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Xfiles />}
        />
        <Route
          path="/:name"
          exact
          render={() => <XfilesDetails />}
        />
      </Switch>
    </Router>
  </div>;
}
