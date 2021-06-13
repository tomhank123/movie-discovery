import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_POPULAR, getPopular } from './actions';

export function* fetchPopular() {
  const requestUrl = '/movie/popular';

  yield delay(2000);

  try {
    const response = yield call(request, 'get', requestUrl);

    yield put(getPopular.success(response));
  } catch ({ message }) {
    yield put(getPopular.failure(message));
  }
}

export function* watchPopular() {
  yield takeLatest(GET_POPULAR[REQUEST], fetchPopular);
}

export default function* moviesSaga() {
  yield all([watchPopular()]);
}
