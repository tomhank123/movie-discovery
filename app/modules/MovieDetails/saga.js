import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_DETAILS, getDetails } from './actions';

export function* fetchDetails({ request: { movieId } }) {
  const requestDetails = `/movie/${movieId}?append_to_response=similar,videos,images,credits`;

  yield delay(2000);

  try {
    const details = yield call(request, 'get', requestDetails);

    yield put(
      getDetails.success({
        ...details,
      }),
    );
  } catch ({ message }) {
    yield put(getDetails.failure(message));
  }
}

export function* watchDetails() {
  yield takeLatest(GET_DETAILS[REQUEST], fetchDetails);
}

export default function* movieDetailsSaga() {
  yield all([watchDetails()]);
}
