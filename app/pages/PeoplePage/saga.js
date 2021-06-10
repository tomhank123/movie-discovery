import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_PEOPLE, getPeople, GET_DETAILS, getDetails } from './actions';

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

export function* fetchDetails({ request: { personId } }) {
  const requestDetails = `/person/${personId}`;
  const requestCredits = `/person/${personId}/combined_credits`;

  yield delay(2000);

  try {
    const [details, { crew, cast }] = yield all([
      call(request, 'get', requestDetails),
      call(request, 'get', requestCredits),
    ]);

    yield put(
      getDetails.success({
        ...details,
        known_for: [...crew, ...cast]
          .filter(item => item.poster_path)
          .filter((_, index) => index < 5),
      }),
    );
  } catch ({ message }) {
    yield put(getDetails.failure(message));
  }
}

export function* watchPeople() {
  yield takeLatest(GET_PEOPLE[REQUEST], fetchPeople);
}

export function* watchDetails() {
  yield takeLatest(GET_DETAILS[REQUEST], fetchDetails);
}

export default function* personSaga() {
  yield all([watchPeople(), watchDetails()]);
}
