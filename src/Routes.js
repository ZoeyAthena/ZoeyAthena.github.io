import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-next-line no-unused-vars
import { withRouter, Route } from 'react-router-dom';

import pageRoutes from './constants/page-routes';
import Homepage from './containers/Homepage';
import AboutMePage from './containers/AboutMePage';
import Games from './containers/GamesPage';
import MemesPage from './containers/MemesPage';

import './App.css';

const Routes = () => (
  <div className="App">
    <Route path={pageRoutes.HOMEPAGE} exact component={Homepage} />
    <Route path={pageRoutes.ABOUT_ME} component={AboutMePage} />
    <Route path={pageRoutes.GAMES} component={Games} />
    <Route path={pageRoutes.MEMES} component={MemesPage} />
  </div>
);

Routes.propTypes = {
  location: PropTypes.shape({}),
};

export default withRouter(Routes);
