/**
 *
 * MovieDetails
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
import MovieArticle from './MovieArticle';

import { makeSelectDetails } from './selectors';
import * as actions from './actions';
import * as helpers from './helpers';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MovieDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'movieDetails', reducer });
  useInjectSaga({ key: 'movieDetails', saga });

  const { location } = restProps;
  const movieId = helpers.getMovieId(location);

  useEffect(() => {
    if (movieId) {
      onLoadDetails({ movieId });
    }
  }, [movieId]);

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
        <MovieArticle {...details} />
      </Container>
    </div>
  );
}

MovieDetails.propTypes = {
  details: PropTypes.object,
  onLoadDetails: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  details: makeSelectDetails(),
});

function mapDispatchToProps(dispatch) {
  const onLoadDetails = actions.getDetails.request;

  return {
    ...bindActionCreators({ onLoadDetails }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MovieDetails);
