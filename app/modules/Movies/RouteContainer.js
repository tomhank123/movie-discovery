import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from 'modules/MovieDetails';

export default function RouteContainer({ children, ...routeProps }) {
  const { match } = routeProps;

  return (
    <Switch>
      <Route exact path={match.path} render={() => children} />
      <Route
        path={`${match.path}/:personId`}
        render={() => <MovieDetails {...routeProps} />}
      />
    </Switch>
  );
}

RouteContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
