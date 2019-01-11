import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <section className="ph3 ph7-l pa3">
      {children}
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
