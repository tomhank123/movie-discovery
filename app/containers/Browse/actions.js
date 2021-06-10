/*
 *
 * Browse actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/Browse/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);
