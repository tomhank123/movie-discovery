/* eslint-disable react/no-danger */
/**
 *
 * PersonArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import Titles from 'components/Titles';

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
        <Col sm={3}>
          <Card className="shadow border-0">
            <Card.Img src={poster} alt={item.name} />
            <Card.Body className="">
              <ListGroup variant="flush">
                <ListGroup.Item className="px-0">
                  <div className="fw-bold">Known For</div>
                  {item.known_for_department}
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <div className="fw-bold">Known Credits</div>
                  {item.known_for_department}
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <div className="fw-bold">Gender</div>
                  {item.gender === 2 ? 'Male' : 'Female'}
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <div className="fw-bold">Birthday</div>
                  {item.birthday}
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <div className="fw-bold">Place of Birth</div>
                  {item.place_of_birth}
                </ListGroup.Item>
                <ListGroup.Item className="px-0">
                  <div className="fw-bold">Also Known As</div>
                  {item.also_known_as.join(', ')}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow border-0" body>
            <h2>{item.name}</h2>

            <h5>Biography</h5>
            <p dangerouslySetInnerHTML={{ __html: biography }} />
          </Card>
          <Row sm={5} className="mt-4">
            {item.known_for.map(titles => (
              <Col key={titles.id}>
                <Titles item={titles} />
              </Col>
            ))}
          </Row>
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
