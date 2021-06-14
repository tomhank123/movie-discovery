import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tv state domain
 */

const selectTvDomain = state => state.tv || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tv
 */

const makeSelectTv = () =>
  createSelector(
    selectTvDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectTvDomain,
    substate => substate.collections,
  );

export default makeSelectTv;
export { makeSelectCollections };
