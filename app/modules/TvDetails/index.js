/**
 *
 * TvDetails
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

export function TvDetails({ details, onLoadDetails, ...restProps }) {
  useInjectReducer({ key: 'tvDetails', reducer });
  useInjectSaga({ key: 'tvDetails', saga });

  const { location } = restProps;
  const tvId = helpers.getTvId(location);

  useEffect(() => {
    if (tvId) {
      onLoadDetails({ tvId });
    }
  }, [tvId]);

  return (
    <div>
      <Helmet>
        <title>TvDetails</title>
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

TvDetails.propTypes = {
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

export default compose(withConnect)(TvDetails);
