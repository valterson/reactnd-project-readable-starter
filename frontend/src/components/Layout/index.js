import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <main className="pa3 ph3 ph7-l">
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
