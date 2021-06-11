import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the movie state domain
 */

const selectMovieDomain = state => state.movie || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Movie
 */

const makeSelectMovie = () =>
  createSelector(
    selectMovieDomain,
    substate => substate,
  );

const makeSelectHomeCollections = () =>
  createSelector(
    selectMovieDomain,
    substate => substate.homeCollections,
  );

export default makeSelectMovie;
export { makeSelectHomeCollections };
