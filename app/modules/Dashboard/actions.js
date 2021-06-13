/* eslint-disable prettier/prettier */
/*
 *
 * Dashboard actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const GET_COLLECTIONS = createRequestTypes('app/Dashboard/GET_COLLECTIONS');
export const getCollections = createAsyncAction(GET_COLLECTIONS);
