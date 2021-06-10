/**
 *
 * DiscoveryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import messages from './messages';

export function DiscoveryPage() {
  return (
    <div>
      <Helmet>
        <title>DiscoveryPage</title>
        <meta name="description" content="Description of DiscoveryPage" />
      </Helmet>
      <Header />
      <Container>
        <FormattedMessage {...messages.header} />
      </Container>
    </div>
  );
}

DiscoveryPage.propTypes = {
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

export default compose(withConnect)(DiscoveryPage);
