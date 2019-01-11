import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCategories } from '../../state/actions/categories';

import CategoryHatch from '../CategoryHatch';
import CategorySedan from '../CategorySedan';
import CategorySuv from '../CategorySuv';
import CategoryPickup from '../CategoryPickup';

class Home extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  
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

Home.propTypes = {
  getCategories: PropTypes.func,
};

Home.defaultProps = {
  getCategories: () => {},
};

const mapStateToProps = ({ categories }) => ({
  categories,
});

const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
