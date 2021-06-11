/*
 *
 * Movie actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const HOME_COLLECTIONS = createRequestTypes(
  'app/Movie/HOME_COLLECTIONS',
);
export const homeCollections = createAsyncAction(HOME_COLLECTIONS);
