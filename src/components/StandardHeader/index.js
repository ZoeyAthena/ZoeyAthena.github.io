import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';

const defaultTitle = "Zoey's Very Professional Website"

const StandardHeader = ({ title }) => (
  <React.Fragment>
    <header className="App-header">
      <h1 className="page-title">{title || defaultTitle}</h1>
    </header>
    <NavBar />
  </React.Fragment>
);

StandardHeader.propTypes = {
  title: PropTypes.string,
};

export default StandardHeader;
