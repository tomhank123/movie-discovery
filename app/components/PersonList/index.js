/**
 *
 * PersonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import PersonItem from 'components/PersonItem';

function PersonList({ loading, error, items }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (items) {
    return (
      <Row sm={2} md={3} lg={4} xl={5} className="g-3">
        {items.map(item => (
          <Col key={item.id}>
            <PersonItem item={item} />
          </Col>
        ))}
      </Row>
    );
  }

  return null;
}

PersonList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default PersonList;
