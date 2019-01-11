import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import FilterBy from './components/FilterBy';

import Home from './containers/Home';
import CategoryHatch from './containers/CategoryHatch';
import CategorySedan from './containers/CategorySedan';
import CategorySuv from './containers/CategorySuv';
import CategoryPickup from './containers/CategoryPickup';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Header />
      <FilterBy />
      <Route path="/" exact component={Home} />
      <Route path="/hatch/" component={CategoryHatch} />
      <Route path="/sedan/" component={CategorySedan} />
      <Route path="/suv/" component={CategorySuv} />
      <Route path="/pick-up/" component={CategoryPickup} />
    </Fragment>
  </Router>
);

export default AppRouter;
