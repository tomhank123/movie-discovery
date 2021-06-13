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

import * as actions from './actions';
import { makeSelectPopularMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function People({ popularMovies, onLoadPopularMovies }) {
  useInjectReducer({ key: 'movies', reducer });
  useInjectSaga({ key: 'movies', saga });

  useEffect(() => {
    onLoadPopularMovies();
  }, []);

  // eslint-disable-next-line no-console
  console.log('popularMovies', popularMovies);

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

People.propTypes = {
  popularMovies: PropTypes.object,
  onLoadPopularMovies: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  popularMovies: makeSelectPopularMovies(),
});

function mapDispatchToProps(dispatch) {
  const onLoadPopularMovies = actions.getPopular.request;

  return {
    ...bindActionCreators({ onLoadPopularMovies }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(People);
