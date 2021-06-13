/*
 *
 * Movies reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { GET_POPULAR } from './actions';

export const initialState = {
  popularMovies: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const moviesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POPULAR[REQUEST]:
        draft.popularMovies.loading = true;
        break;

      case GET_POPULAR[SUCCESS]:
        draft.popularMovies.loading = false;
        draft.popularMovies.error = false;
        reducePopular(action.response, draft);
        break;

      case GET_POPULAR[FAILURE]:
        draft.popularMovies.loading = false;
        draft.popularMovies.error = action.response;
        break;
    }
  });

export default moviesReducer;

function reducePopular(response, draft) {
  draft.popularMovies.items = response.results;
}
