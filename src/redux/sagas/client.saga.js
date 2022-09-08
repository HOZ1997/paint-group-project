import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CLIENT" actions


function* addingClient(action) {

  try {
    const response = yield axios.post('/api/client/', action.payload);
    
  } catch (error) {
    console.log('Add Client post request failed', error);
  }
}

//This will need to be reworked with reducer using something else 
function* fetchClient() {
  try {
    const response = yield axios.get('/api/client');
    yield put({ type: 'SET_CLIENT', payload: response.data });
  } catch (error) {
    console.log('Client get request failed', error);
  }
}

function* clientSaga() {
  yield takeLatest('ADD_CLIENT', addingClient);
  yield takeLatest('FETCH_CLIENT', fetchClient);
}

export default clientSaga;