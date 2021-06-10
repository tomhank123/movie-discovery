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

const makeSelectPeople = () =>
  createSelector(
    selectPersonDomain,
    substate => substate.people,
  );

const makeSelectDetails = () =>
  createSelector(
    selectPersonDomain,
    substate => substate.details,
  );

export default makeSelectPerson;
export { makeSelectPeople, makeSelectDetails };
