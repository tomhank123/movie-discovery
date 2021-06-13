import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movies state domain
 */

const selectMoviesDomain = state => state.movies || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Movies
 */

const makeSelectMovies = () =>
  createSelector(
    selectMoviesDomain,
    substate => substate,
  );

const makeSelectPopularMovies = () =>
  createSelector(
    selectMoviesDomain,
    substate => substate.popularMovies,
  );

export default makeSelectMovies;
export { makeSelectPopularMovies };
