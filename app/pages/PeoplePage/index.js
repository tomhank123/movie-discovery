/**
 *
 * PeoplePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import PeopleContainer from 'containers/People';
import Header from 'components/Header';
import messages from './messages';

export function PeoplePage({ ...routeProps }) {
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
          render={() => (
            <Container>
              <FormattedMessage {...messages.header} />
              Children
            </Container>
          )}
        />
      </Switch>
    </div>
  );
}

PeoplePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(PeoplePage);
