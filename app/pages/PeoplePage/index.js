/**
 *
 * PeoplePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import PeopleContainer from 'containers/People';
import PersonContainer from 'containers/Person';
import Header from 'components/Header';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPerson from './selectors';
import reducer from './reducer';
import saga from './saga';

export function PeoplePage({ ...routeProps }) {
  useInjectReducer({ key: 'person', reducer });
  useInjectSaga({ key: 'person', saga });

  const { match } = routeProps;

  return (
    <div>
      <Helmet>
        <title>PeoplePage</title>
        <meta name="description" content="Description of PeoplePage" />
      </Helmet>
      <Header />
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => <PeopleContainer {...routeProps} />}
        />
        <Route
          path={`${match.path}/:personId`}
          render={() => <PersonContainer {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

PeoplePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  person: makeSelectPerson(),
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

export default compose(withConnect)(PeoplePage);
