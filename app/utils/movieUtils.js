import * as ROUTES from './routes';

export const getPoster = poster =>
  poster ? `https://www.themoviedb.org/t/p/original/${poster}` : poster;

export const getBackdrop = backdrop =>
  backdrop ? `https://www.themoviedb.org/t/p/original/${backdrop}` : backdrop;

export const getUrl = id => `${ROUTES.MOVIE}/${id}`;
export const getOverview = overview => overview.replace(/\n/g, '<br />');
