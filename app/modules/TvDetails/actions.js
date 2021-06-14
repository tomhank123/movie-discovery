/*
 *
 * TvDetails actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const GET_DETAILS = createRequestTypes('app/TvDetails/GET_DETAILS');
export const getDetails = createAsyncAction(GET_DETAILS);
