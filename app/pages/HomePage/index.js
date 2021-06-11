/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectHomeCollections } from 'containers/Movie/selectors';
import * as actions from 'containers/Movie/actions';
import reducer from 'containers/Movie/reducer';
import saga from 'containers/Movie/saga';

import { Container } from 'react-bootstrap';
import Collections from 'components/Collections';
import Jumbotron from 'components/Jumbotron';
import Header from 'components/Header';
import messages from './messages';

export function HomePage({ collections, onLoadCollections }) {
  useInjectReducer({ key: 'movie', reducer });
  useInjectSaga({ key: 'movie', saga });

  useEffect(() => {
    onLoadCollections();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Movie Discovery</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Header />
      <Jumbotron />
      <Container>
        <Collections isSwiper {...collections} />
      </Container>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  collections: PropTypes.object,
  onLoadCollections: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collections: makeSelectHomeCollections(),
});

function mapDispatchToProps(dispatch) {
  const onLoadCollections = actions.homeCollections.request;

  return {
    ...bindActionCreators({ onLoadCollections }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
