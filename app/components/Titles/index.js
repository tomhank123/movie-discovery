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
  const poster = item.poster_path
    ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
    : item.poster_path;
  const url = `${ROUTES.MOVIE}/${item.id}`;
  const title = item.title || item.name;

  return (
    <Card className="border-0 shadow-sm">
      <Card.Img variant="top" src={poster} alt={title} />
      <Card.Body>
        <div className="d-grid gap-2">
          <Button variant="secondary" size="sm" as={Link} to={url}>
            Watch Now
          </Button>
          <Button variant="outline-secondary" size="sm" as={Link} to={url}>
            Watch List
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

Titles.propTypes = {
  item: PropTypes.object,
};

export default Titles;
