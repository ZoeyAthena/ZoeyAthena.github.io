import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';

import pageRoutes from './constants/page-routes';
import Homepage from './containers/Homepage';
import AboutMePage from './containers/AboutMePage';
import GamesPage from './containers/GamesPage';
import MemesPage from './containers/MemesPage';
import BabieGiftPage from './containers/BabieGiftPage';

import './App.css';

const Routes = () => (
  <div className="App">
    <Route path={pageRoutes.HOMEPAGE} exact component={Homepage} />
    <Route path={pageRoutes.ABOUT_ME} component={AboutMePage} />
    <Route path={pageRoutes.GAMES} component={GamesPage} />
    <Route path={pageRoutes.MEMES} component={MemesPage} />
    <Route path={pageRoutes.BABIE_GIFT} component={BabieGiftPage} />
  </div>
);

Routes.propTypes = {
  location: PropTypes.shape({}),
};

export default withRouter(Routes);
