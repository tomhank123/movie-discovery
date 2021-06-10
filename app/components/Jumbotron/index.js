/**
 *
 * Jumbotron
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import SearchForm from 'components/SearchForm';

function StyledJumbotron() {
  return (
    <Card bg="secondary" className="rounded-0" text="light">
      <Container>
        <Card.Body className="px-0 py-5">
          <h1 className="display-4 font-weight-bold">Welcome.</h1>
          <p className="lead">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>

          <SearchForm className="mt-4" />
        </Card.Body>
      </Container>
    </Card>
  );
}

StyledJumbotron.propTypes = {};

export default StyledJumbotron;
