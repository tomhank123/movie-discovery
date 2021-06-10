/**
 *
 * Person
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { matchPath } from 'react-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Container } from 'react-bootstrap';
import PersonArticle from 'components/PersonArticle';

import { makeSelectDetails } from 'pages/PeoplePage/selectors';
import * as actions from 'pages/PeoplePage/actions';
import reducer from 'pages/PeoplePage/reducer';
import saga from 'pages/PeoplePage/saga';
import messages from './messages';

export function Person({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'person', reducer });
  useInjectSaga({ key: 'person', saga });

  const { location } = restProps;
  const match = matchPath(location.pathname, {
    path: '/person/:personId',
    exact: true,
    strict: true,
  });
  const personId = +match.params.personId;

  useEffect(() => {
    if (personId) {
      onLoadDetails({ personId });
    }
  }, [personId]);

  return (
    <div>
      <Helmet>
        <title>Person</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Container className="mt-5">
        <PersonArticle {...details} />
      </Container>
    </div>
  );
}

Person.propTypes = {
  details: PropTypes.object,
  onLoadDetails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectDetails(),
});

function mapDispatchToProps(dispatch) {
  const onLoadDetails = actions.getDetails.request;

  return {
    ...bindActionCreators({ onLoadDetails }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Person);
