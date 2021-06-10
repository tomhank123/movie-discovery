/* eslint-disable react/no-danger */
/**
 *
 * PersonArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

function PersonArticle({ loading, error, item }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (item) {
    const poster = `https://www.themoviedb.org/t/p/w470_and_h470_face/${
      item.profile_path
    }`;
    const biography = item.biography.replace(/\n/g, '<br />');

    return (
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img src={poster} alt={item.name} />
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title>Known For</Card.Title>
                  <Card.Text>{item.known_for_department}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Known Credits</Card.Title>
                  <Card.Text>{item.known_for_department}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Gender</Card.Title>
                  <Card.Text>{item.gender === 2 ? 'Male' : 'Female'}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Birthday</Card.Title>
                  <Card.Text>{item.birthday}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Place of Birth</Card.Title>
                  <Card.Text>{item.place_of_birth}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Also Known As</Card.Title>
                  <Card.Text>{item.also_known_as.join(', ')}</Card.Text>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          <h2>{item.name}</h2>

          <h5>Biography</h5>
          <p dangerouslySetInnerHTML={{ __html: biography }} />
        </Col>
      </Row>
    );
  }

  return null;
}

PersonArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default PersonArticle;
