/**
 *
 * Titles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import * as ROUTES from 'utils/routes';

function Titles({ item }) {
  const poster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${
    item.poster_path
  }`;
  const url = `${ROUTES.MOVIE}?id=${item.id}`;
  const title = item.title || item.name;

  return (
    <Card className="border-0 shadow-sm">
      <Card.Img variant="top" src={poster} alt={title} />
      <Card.Body>
        <Card.Text className="small m-0">Original Title</Card.Text>
        <Card.Title>Title</Card.Title>
        <Button variant="outline-secondary" size="sm" as={Link} to={url}>
          Play Now
        </Button>
      </Card.Body>
      <Card.Body hidden>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted small">
          {item.original_title || item.original_name}
        </Card.Text>
        <Button variant="secondary" size="sm" as={Link} to={url}>
          Play Now
        </Button>
      </Card.Body>
    </Card>
  );
}

Titles.propTypes = {
  item: PropTypes.object,
};

export default Titles;
