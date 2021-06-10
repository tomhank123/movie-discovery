/**
 *
 * Browse
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { Container } from 'react-bootstrap';
import Collections from 'components/Collections';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectCollections } from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export function Browse({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'browse', reducer });
  useInjectSaga({ key: 'browse', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <Container>
      <Collections isSwiper {...collections} />
    </Container>
  );
}

Browse.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.collections.request;

  return {
    ...bindActionCreators({ onLoadCollections }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Browse);
