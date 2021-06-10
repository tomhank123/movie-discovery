/**
 *
 * SearchPage
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

export function SearchPage() {
  return (
    <div>
      <Helmet>
        <title>SearchPage</title>
        <meta name="description" content="Description of SearchPage" />
      </Helmet>
      <Header />
      <Container>
        <FormattedMessage {...messages.header} />
      </Container>
    </div>
  );
}

SearchPage.propTypes = {
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

export default compose(withConnect)(SearchPage);
