import { matchPath } from 'react-router';

export const getPersonId = location => {
  const match = matchPath(location.pathname, {
    path: '/person/:personId',
    exact: true,
    strict: true,
  });
  const personId = +match.params.personId;

  return personId;
};
