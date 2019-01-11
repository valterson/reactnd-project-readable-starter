import React, { Component, Fragment } from 'react';

import CategoryHatch from '../CategoryHatch';
import CategorySedan from '../CategorySedan';
import CategorySuv from '../CategorySuv';
import CategoryPickup from '../CategoryPickup';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <CategoryHatch />
        <CategorySedan />
        <CategorySuv />
        <CategoryPickup />
      </Fragment>
    );
  }
}

export default Home;
