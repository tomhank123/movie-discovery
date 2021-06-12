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
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectPeople } from 'containers/People/selectors';
import * as actions from 'containers/People/actions';
import reducer from 'containers/People/reducer';
import saga from 'containers/People/saga';

import { Container } from 'react-bootstrap';
import PersonList from 'components/PersonList';
import messages from './messages';

export function People({ people, onLoadPeople }) {
  useInjectReducer({ key: 'people', reducer });
  useInjectSaga({ key: 'people', saga });

  useEffect(() => {
    onLoadPeople({});
  }, []);

  return (
    <div>
      <Helmet>
        <title>People</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Container className="py-5">
        <PersonList {...people} />
      </Container>
    </div>
  );
}

People.propTypes = {
  people: PropTypes.object,
  onLoadPeople: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  people: makeSelectPeople(),
});

function mapDispatchToProps(dispatch) {
  const onLoadPeople = actions.getPopular.request;

  return {
    ...bindActionCreators({ onLoadPeople }, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(People);
