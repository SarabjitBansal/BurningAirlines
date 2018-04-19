import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { Button } from 'react-native';

import Home from './components/Home';
import Search from './components/Srch';
import Flight from './components/Flight';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/srch" component={ Search }/>
      <Route exact path="/flight/:id" component={ Flight }/>
    </div>
  </Router>
);

export default Routes;
