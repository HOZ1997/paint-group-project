import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* projectDetails(action) {
  console.log('in fetchProjects');
  try {
    const response = yield axios.post('/api/new_project', action.payload);
    console.log('in SF Saga posting', response);
  } catch (error) {
    console.log(' New project post request failed', error);
  }
}

function* projectDetailsSaga() {
  yield takeLatest('PUSH_PROJECTDETAILS', projectDetails);
}

export default projectDetailsSaga;