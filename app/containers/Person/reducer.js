/*
 *
 * Person reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { GET_PEOPLE } from './actions';

export const initialState = {
  people: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const personReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PEOPLE[REQUEST]:
        draft.people.loading = true;
        break;

      case GET_PEOPLE[SUCCESS]:
        draft.people.loading = false;
        draft.people.error = false;
        reducePeople(action.response, draft);
        break;

      case GET_PEOPLE[FAILURE]:
        draft.people.loading = false;
        draft.people.error = action.response;
        break;
    }
  });

export default personReducer;

function reducePeople(response, draft) {
  draft.people.items = response.results;
}
