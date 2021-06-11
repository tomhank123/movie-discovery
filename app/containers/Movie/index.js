/**
 *
 * Movie
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMovie from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Movie() {
  useInjectReducer({ key: 'movie', reducer });
  useInjectSaga({ key: 'movie', saga });

  return <div />;
}

Movie.propTypes = {};

const mapStateToProps = createStructuredSelector({
  movie: makeSelectMovie(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Movie);
