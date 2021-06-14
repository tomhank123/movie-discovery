import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { getCollections, GET_COLLECTIONS } from './actions';

export function* fetchCollecttions() {
  yield delay(2000);

  try {
    const [popular, nowPlaying, upcoming, topRated] = yield all([
      call(request, 'get', '/tv/popular'),
      call(request, 'get', '/tv/airing_today'),
      call(request, 'get', '/tv/on_the_air'),
      call(request, 'get', 'tv/top_rated'),
    ]);

    yield put(
      getCollections.success([
        {
          id: 'Popular On TV',
          title: 'Popular In Theaters',
          data: popular,
        },
        {
          id: 'What are people watching?',
          title: 'What are people watching?',
          data: nowPlaying,
        },
        {
          id: 'Worth the wait',
          title: 'Worth the wait',
          data: upcoming,
        },
        {
          id: 'Top Rated',
          title: 'Top Rated',
          data: topRated,
        },
      ]),
    );
  } catch ({ message }) {
    yield put(getCollections.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(GET_COLLECTIONS[REQUEST], fetchCollecttions);
}

export default function* tvSaga() {
  yield all([watchCollections()]);
}
