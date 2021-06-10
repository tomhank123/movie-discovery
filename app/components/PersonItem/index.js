/**
 *
 * PersonItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import * as ROUTES from 'utils/routes';

function PersonItem({ item }) {
  const poster = `https://www.themoviedb.org/t/p/w470_and_h470_face/${
    item.profile_path
  }`;
  const url = `${ROUTES.PERSON}/${item.id}`;

  return (
    <Card className="border-0 shadow-sm">
      <Card.Img variant="top" src={poster} alt={item.name} />
      <Card.Body>
        <Card.Text className="small m-0">{item.popularity}</Card.Text>
        <Card.Title className="text-truncate" title={item.name}>
          {item.name}
        </Card.Title>
        <Button variant="outline-secondary" size="sm" as={Link} to={url}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

PersonItem.propTypes = {
  item: PropTypes.object,
};

export default PersonItem;
