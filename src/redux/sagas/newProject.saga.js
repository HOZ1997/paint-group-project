import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SONGS" actions
function* newProject(action) {
  console.log('in fetchProjects');
  try {
    const response = yield axios.post('/api/new_project', action.payload);
    console.log('in SF Saga posting', response);
  } catch (error) {
    console.log(' New project post request failed', error);
  }
}

function* newProjectSaga() {
  yield takeLatest('PUSH_NEW_PROJECT', newProject);
}

export default newProjectSaga;