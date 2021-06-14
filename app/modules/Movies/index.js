/**
 *
 * Movies
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import MovieDetails from 'modules/MovieDetails';
import MovieContainer from './MovieContainer';
import makeSelectMovies from './selectors';

export function Movies({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => <MovieContainer {...routeProps} />}
      />
      <Route
        path={`${match.path}/:personId`}
        render={() => <MovieDetails {...routeProps} />}
      />
    </Switch>
  );
}

Movies.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Movies);
