/* eslint-disable react/no-danger */
/**
 *
 * PersonArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Row, Col, Card, Figure, Image, Button } from 'react-bootstrap';
import Titles from 'components/Titles';
import { getBio, getPoster } from './helpers';

function PersonArticle({ loading, error, item }) {
  if (loading) {
    return (
      <React.Fragment>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </React.Fragment>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (item) {
    const poster = getPoster(item.profile_path);
    const biography = getBio(item.biography);

    return (
      <article className="d-grid gap-4">
        <Card className="border-0 shadow-sm" body>
          <Row className="g-3">
            <Col md={3}>
              <Card className="text-center border-0" body>
                <Figure className="w-50">
                  <Image
                    src={poster}
                    alt={item.name}
                    thumbnail
                    roundedCircle
                    fluid
                    className="shadow-sm"
                  />
                </Figure>
                <Card.Title
                  className="text-truncate text-success mb-0"
                  title={item.name}
                >
                  {item.name}
                </Card.Title>
                <Card.Text className="text-muted font-monospace">
                  {item.known_for_department}
                </Card.Text>
                <div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mx-1"
                  >
                    FA
                  </Button>
                  <Button variant="success" size="sm" className="mx-1">
                    + Follow me
                  </Button>
                </div>
              </Card>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <span className="fw-bold text-muted">Known Credits: </span>
                  {item.known_for.length}
                </li>
                <li>
                  <span className="fw-bold text-muted">Gender: </span>
                  {item.gender === 2 ? 'Male' : 'Female'}
                </li>
                <li>
                  <span className="fw-bold text-muted">Birthday: </span>
                  {item.birthday}
                </li>
                <li>
                  <span className="fw-bold text-muted">Place of birth: </span>
                  {item.place_of_birth}
                </li>
                <li>
                  <span className="fw-bold text-muted">Also known as: </span>
                  {item.also_known_as.join(', ')}
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <div className="d-grid gap-2">
                <Button variant="outline-secondary" size="sm">
                  Follow Me
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Follow Me
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Follow Me
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <Row>
              <Col md={8}>
                <p dangerouslySetInnerHTML={{ __html: biography }} />
              </Col>
              <Col>
                <Row sm={3} className="g-2">
                  {item.images.profiles
                    .filter((_, index) => index < 9)
                    .map(image => (
                      <Col key={image.id}>
                        <Card className="border-0">
                          <Card.Img src={getPoster(image.file_path)} />
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Row sm={2} md={4} lg={6} className="g-3">
            {item.known_for.map(titles => (
              <Col key={titles.id}>
                <Titles item={titles} />
              </Col>
            ))}
          </Row>
        </Card>
      </article>
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
