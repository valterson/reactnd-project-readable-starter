import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import FilterBy from './components/FilterBy';
import Layout from './components/Layout';

import Home from './containers/Home';
import CategoryHatch from './containers/CategoryHatch';
import CategorySedan from './containers/CategorySedan';
import CategorySuv from './containers/CategorySuv';
import CategoryPickup from './containers/CategoryPickup';

import store from './state';

const AppRouter = () => (
  <Provider store={store}>
    <Router history={window.history}>
      <Fragment>
        <Header />
        <FilterBy />
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/hatch/" component={CategoryHatch} />
          <Route path="/sedan/" component={CategorySedan} />
          <Route path="/suv/" component={CategorySuv} />
          <Route path="/pick-up/" component={CategoryPickup} />
        </Layout>
      </Fragment>
    </Router>
  </Provider>
);

export default AppRouter;
