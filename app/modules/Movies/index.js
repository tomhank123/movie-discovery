/**
 *
 * Movies
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import MovieDetails from 'modules/MovieDetails';
import MovieContainer from './MovieContainer';
import makeSelectMovies from './selectors';
import messages from './messages';

export function Movies({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <div>
      <Helmet>
        <title>Movies</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
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
    </div>
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
