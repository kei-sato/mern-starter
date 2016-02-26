import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation';

const App = ({children}) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
