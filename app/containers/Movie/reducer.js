/*
 *
 * Movie reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { HOME_COLLECTIONS } from './actions';

export const initialState = {
  homeCollections: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const movieReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HOME_COLLECTIONS[REQUEST]:
        draft.homeCollections.loading = true;
        break;

      case HOME_COLLECTIONS[SUCCESS]:
        draft.homeCollections.loading = false;
        draft.homeCollections.error = false;
        reduceCollections(action.response, draft);
        break;

      case HOME_COLLECTIONS[FAILURE]:
        draft.homeCollections.loading = false;
        draft.homeCollections.error = action.response;
        break;
    }
  });

export default movieReducer;

function reduceCollections(response, draft) {
  draft.homeCollections.items = response.map(({ title, data }) => ({
    title,
    data: data.results,
  }));
}
