import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the person state domain
 */

const selectPersonDomain = state => state.person || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Person
 */

const makeSelectPerson = () =>
  createSelector(
    selectPersonDomain,
    substate => substate,
  );

const makeSelectPopularPeople = () =>
  createSelector(
    selectPersonDomain,
    substate => substate.people,
  );

export default makeSelectPerson;
export { makeSelectPopularPeople };
