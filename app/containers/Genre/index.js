/**
 *
 * Genre
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGenre from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Genre() {
  useInjectReducer({ key: 'genre', reducer });
  useInjectSaga({ key: 'genre', saga });

  return <div />;
}

Genre.propTypes = {};

const mapStateToProps = createStructuredSelector({
  genre: makeSelectGenre(),
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

export default compose(withConnect)(Genre);
