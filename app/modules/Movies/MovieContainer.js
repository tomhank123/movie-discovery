/**
 *
 * People
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import Collections from 'components/Collections';

import * as actions from './actions';
import { makeSelectCollections } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function People({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

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
        <Collections isSwiper {...collections} />
      </Container>
    </div>
  );
}

People.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.getCollections.request;

  return {
    ...bindActionCreators({ onLoadCollections }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(People);
