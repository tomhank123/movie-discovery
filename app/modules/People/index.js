/**
 *
 * People
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import PersonDetails from 'modules/PersonDetails';
import PeopleContainer from './PeopleContainer';
import makeSelectPeople from './selectors';
import reducer from './reducer';
import saga from './saga';

export function People({ ...routeProps }) {
  useInjectReducer({ key: 'people', reducer });
  useInjectSaga({ key: 'people', saga });

  const { match } = routeProps;

  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => <PeopleContainer {...routeProps} />}
        />
        <Route
          path={`${match.path}/:personId`}
          render={() => <PersonDetails {...routeProps} />}
        />
      </Switch>
    </React.Fragment>
  );
}

People.propTypes = {};

const mapStateToProps = createStructuredSelector({
  people: makeSelectPeople(),
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

export default compose(withConnect)(People);
