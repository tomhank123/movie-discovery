/*
 *
 * Movies actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const GET_POPULAR = createRequestTypes('app/Movies/GET_POPULAR');
export const getPopular = createAsyncAction(GET_POPULAR);
