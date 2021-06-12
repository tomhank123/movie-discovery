import { matchPath } from 'react-router';

export const getMovieId = location => {
  const match = matchPath(location.pathname, {
    path: '/movie/:movieId',
    exact: true,
    strict: true,
  });
  const personId = +match.params.movieId;

  return personId;
};
