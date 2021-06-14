import { matchPath } from 'react-router';

export const getTvId = location => {
  const match = matchPath(location.pathname, {
    path: '/tv/:tvId',
    exact: true,
    strict: true,
  });
  const tvId = +match.params.tvId;

  return tvId;
};
