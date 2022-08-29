import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CLIENT" actions


function* addingFullform(action) {

  try {
    const response = yield axios.post('/api/fullform/', action.payload);
    yield put({ type: 'FETCH_FULLFORM', payload: response.data });
    //fetchClient();
  } catch (error) {
    console.log('Add Fullform post request failed', error);
  }
}

//This will need to be reworked with reducer using something else 
function* fetchFullform() {
  try {
    const response = yield axios.get('/api/fullform');
    yield put({ type: 'SET_FULLFORM', payload: response.data });
  } catch (error) {
    console.log('FullForm get request failed', error);
  }
}

function* fullformSaga() {
  yield takeLatest('ADD_FULLFORM', addingFullform);
  yield takeLatest('FETCH_FULLFORM', fetchFullform);
}

export default fullformSaga;