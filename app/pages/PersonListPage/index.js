/**
 *
 * PersonListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import PersonContainer from 'pages/PersonPage';
import Header from 'components/Header';
import PageContainer from './PageContainer';

export function PersonListPage({ ...routeProps }) {
  const { match } = routeProps;

  return (
    <div>
      <Helmet>
        <title>PersonListPage</title>
        <meta name="description" content="Description of PersonListPage" />
      </Helmet>
      <Header />
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => <PageContainer {...routeProps} />}
        />
        <Route
          path={`${match.path}/:personId`}
          render={() => <PersonContainer {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

PersonListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PersonListPage);
