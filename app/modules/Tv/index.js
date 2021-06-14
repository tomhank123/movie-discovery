/**
 *
 * Tv
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import TvDetails from 'modules/TvDetails';
import TvContainer from './TvContainer';
import makeSelectTv from './selectors';

export function Tv({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => <TvContainer {...routeProps} />}
      />
      <Route
        path={`${match.path}/:personId`}
        render={() => <TvDetails {...routeProps} />}
      />
    </Switch>
  );
}

Tv.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tv: makeSelectTv(),
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

export default compose(withConnect)(Tv);
