/**
 *
 * DiscoveryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';
import Header from 'components/Header';
import messages from './messages';

export function DiscoveryPage() {
  return (
    <div>
      <Helmet>
        <title>DiscoveryPage</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Header />
      <Container className="py-5">
        <Card body bg="dark" text="light">
          <h1 className="display-4">
            <FormattedMessage {...messages.header} />
          </h1>
          <p className="lead">
            Breakpoints are the building blocks of responsive design. Use them
            to control when your layout can be adapted at a particular viewport
            or device size.
          </p>
          <Button variant="outline-light" as={Link} to="/">
            Go Back
          </Button>
        </Card>
      </Container>
    </div>
  );
}

DiscoveryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(DiscoveryPage);
