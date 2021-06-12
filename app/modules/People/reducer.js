/*
 *
 * Person reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { GET_POPULAR, GET_DETAILS } from './actions';

export const initialState = {
  people: {
    loading: false,
    error: false,
    items: false,
  },
  details: {
    loading: false,
    error: false,
    item: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const peopleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POPULAR[REQUEST]:
        draft.people.loading = true;
        break;

      case GET_POPULAR[SUCCESS]:
        draft.people.loading = false;
        draft.people.error = false;
        reducePeople(action.response, draft);
        break;

      case GET_POPULAR[FAILURE]:
        draft.people.loading = false;
        draft.people.error = action.response;
        break;

      case GET_DETAILS[REQUEST]:
        draft.details.loading = true;
        break;

      case GET_DETAILS[SUCCESS]:
        draft.details.loading = false;
        draft.details.error = false;
        reduceDetails(action.response, draft);
        break;

      case GET_DETAILS[FAILURE]:
        draft.details.loading = false;
        draft.details.error = action.response;
        break;
    }
  });

export default peopleReducer;

function reducePeople(response, draft) {
  draft.people.items = response.results;
}

function reduceDetails(response, draft) {
  draft.details.item = response;
}
