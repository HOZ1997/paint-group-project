import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CLIENTTYPE" actions
function* fetchClientType() {
  try {
    const response = yield axios.get('/api/clienttype');
    console.log('response', response);
    yield put({ type: 'SET_CLIENTTYPE', payload: response.data });
  } catch (error) {
    console.log('CLIENTTYPE get request failed', error);
  }
}

function* clienttypeSaga() {
  yield takeLatest('FETCH_CLIENTTYPE', fetchClientType);
}

export default clienttypeSaga;