/* eslint-disable react/no-danger */
/**
 *
 * MovieArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Card } from 'react-bootstrap';
import { getPoster, getOverview } from 'utils/movieUtils';

function MovieArticle({ loading, error, item }) {
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
    const poster = getPoster(item.poster_path);
    const overview = getOverview(item.overview);

    return (
      <article>
        <Card className="col-3">
          <Card.Img src={poster} alt={item.title || item.name} />
          <Card.Body>
            <h1>{item.title || item.name}</h1>
            <p>{item.genres.map(genre => genre.name).join(', ')}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <p dangerouslySetInnerHTML={{ __html: overview }} />
          </Card.Body>
        </Card>
      </article>
    );
  }

  return <h1>No data yet!</h1>;
}

MovieArticle.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  loading: PropTypes.bool,
};

export default MovieArticle;
