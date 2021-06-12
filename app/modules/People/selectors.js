import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the people state domain
 */

const selectPeopleDomain = state => state.people || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by People
 */

const makeSelectPeopleState = () =>
  createSelector(
    selectPeopleDomain,
    substate => substate,
  );

const makeSelectPeople = () =>
  createSelector(
    selectPeopleDomain,
    substate => substate.people,
  );

const makeSelectDetails = () =>
  createSelector(
    selectPeopleDomain,
    substate => substate.details,
  );

export default makeSelectPeopleState;
export { makeSelectPeople, makeSelectDetails };
