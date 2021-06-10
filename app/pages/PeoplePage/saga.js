import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_PEOPLE, getPeople } from './actions';

export function* fetchPeople() {
  const requestUrl = '/person/popular';

  yield delay(2000);

  try {
    const response = yield call(request, 'get', requestUrl);

    yield put(getPeople.success(response));
  } catch ({ message }) {
    yield put(getPeople.failure(message));
  }
}

export function* watchPeople() {
  yield takeLatest(GET_PEOPLE[REQUEST], fetchPeople);
}

export default function* personSaga() {
  yield all([watchPeople()]);
}
