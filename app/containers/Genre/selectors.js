import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the genre state domain
 */

const selectGenreDomain = state => state.genre || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Genre
 */

const makeSelectGenre = () =>
  createSelector(
    selectGenreDomain,
    substate => substate,
  );

export default makeSelectGenre;
export { selectGenreDomain };
