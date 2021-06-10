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

import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import messages from './messages';

export function PeoplePage() {
  return (
    <div>
      <Helmet>
        <title>PeoplePage</title>
        <meta name="description" content="Description of PeoplePage" />
      </Helmet>
      <Header />
      <Container>
        <FormattedMessage {...messages.header} />
      </Container>
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
