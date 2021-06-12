/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from 'pages/LoginPage/Loadable';
import HomePage from 'pages/HomePage/Loadable';
import SearchPage from 'pages/SearchPage/Loadable';
import PeopleModules from 'modules/People/Loadable';
import DiscoveryPage from 'pages/DiscoveryPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';

import * as ROUTES from 'utils/routes';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        {/* Published User Routes */}
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />

        {/* Protected Routes */}
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SEARCH} component={SearchPage} />
        <Route
          path={ROUTES.PERSON}
          render={routeProps => <PeopleModules {...routeProps} />}
        />
        <Route
          exact
          path={[ROUTES.MOVIE, ROUTES.TV]}
          component={DiscoveryPage}
        />

        {/* Others */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
