/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';
import Header from 'components/Header';
import messages from './messages';

export default function NotFound() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
