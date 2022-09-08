import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROJECT_SCOPE" actions


function* addingProjectscope(action) {

  try {
    const response = yield axios.post('api/projectscope/', action.payload);
  
  } catch (error) {
    console.log('Add Project scope post request failed', error);
  }
}

//This will need to be reworked with reducer using something else 
function* fetchProjectscope() {
  try {
    const response = yield axios.get('/api/projectscope');
    yield put({ type: 'SET_PROJECT_SCOPE', payload: response.data });
  } catch (error) {
    console.log('ProjectScope get request failed', error);
  }
}

function* projectscopeSaga() {
  yield takeLatest('ADD_PROJECT_SCOPE', addingProjectscope);
  yield takeLatest('FETCH_PROJECT_SCOPE', fetchProjectscope);
}

export default projectscopeSaga;