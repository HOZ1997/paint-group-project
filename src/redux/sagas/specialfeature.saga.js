import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SONGS" actions
function* saveSF() {
  console.log('in fetchProjects');
  try {
    const response = yield axios.post('/api/add_special_feature', action.payload);
    console.log('in SF Saga posting', response);
  } catch (error) {
    console.log(' Special Feature post request failed', error);
  }
}

function* saveSFSaga() {
  yield takeLatest('SAVE_SF', saveSF);
}

export default saveSFSaga;
