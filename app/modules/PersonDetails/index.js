/**
 *
 * PersonDetails
 *
 */

import Header from 'components/Header';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import PersonArticle from './PersonArticle';
import * as actions from './actions';
import * as helpers from './helpers';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { makeSelectDetails } from './selectors';

export function PersonDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'personDetails', reducer });
  useInjectSaga({ key: 'personDetails', saga });

  const { location } = restProps;
  const personId = helpers.getPersonId(location);

  useEffect(() => {
    if (personId) {
      onLoadDetails({ personId });
    }
  }, [personId]);

  return (
    <div>
      <Helmet>
        <title>Person Details</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Header />
      <Container className="py-5">
        <PersonArticle {...details} />
      </Container>
    </div>
  );
}

PersonDetails.propTypes = {
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

export default compose(withConnect)(PersonDetails);
