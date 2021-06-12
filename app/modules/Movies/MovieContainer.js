/**
 *
 * People
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import reducer from 'modules/People/reducer';
import saga from 'modules/People/saga';

import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import messages from './messages';

export function People() {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  return (
    <div>
      <Helmet>
        <title>Movie Container</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Header />
      <Container className="py-5">
        <FormattedMessage {...messages.header} />
      </Container>
    </div>
  );
}

People.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(/* dispatch */) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(People);
