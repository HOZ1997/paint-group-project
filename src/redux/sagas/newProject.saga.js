import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* newProject(action) {
  console.log('in fetchProjects');
  try {
    const response = yield axios.post('/api/new_project', action.payload);
    console.log('in SF Saga posting', response);
    yield put({ type: 'GIVE_ID', payload: response.data });
    console.log('in the new project saga hoping for a returned id to send to reducer', response.data);
  } catch (error) {
    console.log(' New project post request failed', error);
  }
}

function* newProjectSaga() {
  yield takeLatest('PUSH_NEW_PROJECT', newProject);
}

export default newProjectSaga;