/**
 *
 * SearchForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Form, InputGroup, Button } from 'react-bootstrap';

function SearchForm({ ...restProps }) {
  return (
    <Form {...restProps}>
      <Form.Group controlId="searchForm.Query">
        <InputGroup size="lg" className="rounded-circle">
          <Form.Control
            type="text"
            placeholder="Search for a movie, tv show, person, ..."
          />
          <Button variant="outline-light">Search</Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

SearchForm.propTypes = {};

export default SearchForm;
