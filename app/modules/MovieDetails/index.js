/**
 *
 * MovieDetails
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
import { Container } from 'react-bootstrap';
import Header from 'components/Header';

import makeSelectMovieDetails from './selectors';
import * as helpers from './helpers';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MovieDetails({ ...restProps }) {
  useInjectReducer({ key: 'movieDetails', reducer });
  useInjectSaga({ key: 'movieDetails', saga });

  const { location } = restProps;
  const movieId = helpers.getMovieId(location);

  return (
    <div>
      <Helmet>
        <title>MovieDetails</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Header />
      <Container>
        <h1>Movie {movieId}</h1>
      </Container>
    </div>
  );
}

MovieDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movieDetails: makeSelectMovieDetails(),
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

export default compose(withConnect)(MovieDetails);
