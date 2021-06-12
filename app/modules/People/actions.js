/*
 *
 * People actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const GET_POPULAR = createRequestTypes('app/People/GET_POPULAR');
export const getPopular = createAsyncAction(GET_POPULAR);

export const GET_DETAILS = createRequestTypes('app/People/GET_DETAILS');
export const getDetails = createAsyncAction(GET_DETAILS);
