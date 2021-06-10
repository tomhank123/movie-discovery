/*
 *
 * Person actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const GET_PEOPLE = createRequestTypes('app/Person/GET_PEOPLE');
export const getPeople = createAsyncAction(GET_PEOPLE);

export const GET_DETAILS = createRequestTypes('app/Person/GET_DETAILS');
export const getDetails = createAsyncAction(GET_DETAILS);
