import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SONGS" actions
function* getProject() {
  console.log('in fetchProjects');
  try {
    const response = yield axios.get('/api/get_project');
    console.log('response in fetchProjects in projectsSaga', response);
    yield put({ type: 'SET_PROJECT', payload: response.data });
  } catch (error) {
    console.log('Songs get request failed', error);
  }
}

function* getProjectSaga() {
  yield takeLatest('FETCH_PROJECT', getProject);
}

export default getProjectSaga;
