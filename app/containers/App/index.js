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

import DashboardModule from 'modules/Dashboard/Loadable';
import PeopleModule from 'modules/People/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import * as ROUTES from 'utils/routes';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        {/* Published User Routes */}
        <Route exact path={ROUTES.LOGIN} component={null} />

        {/* Protected Routes */}
        <Route exact path={ROUTES.HOME} component={DashboardModule} />
        <Route exact path={ROUTES.SEARCH} component={null} />
        <Route
          path={ROUTES.PERSON}
          render={routeProps => <PeopleModule {...routeProps} />}
        />
        <Route exact path={[ROUTES.MOVIE, ROUTES.TV]} component={null} />

        {/* Others */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
