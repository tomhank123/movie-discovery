/*
 *
 * Browse reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { COLLECTIONS } from './actions';

export const initialState = {
  collections: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const browseReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COLLECTIONS[REQUEST]:
        draft.collections.loading = true;
        break;

      case COLLECTIONS[SUCCESS]:
        draft.collections.loading = false;
        draft.collections.error = false;
        reduceCollections(action.response, draft);
        break;

      case COLLECTIONS[FAILURE]:
        draft.collections.loading = false;
        draft.collections.error = action.response;
        break;
    }
  });

export default browseReducer;

function reduceCollections(response, draft) {
  draft.collections.items = response.map(({ title, data }) => ({
    title,
    data: data.results,
  }));
}
