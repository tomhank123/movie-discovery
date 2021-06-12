/**
 *
 * Movies
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMovies from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Movies() {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  return (
    <div>
      <Helmet>
        <title>Movies</title>
        <meta name="description" content="Description of Movies" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Movies.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
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

export default compose(withConnect)(Movies);
