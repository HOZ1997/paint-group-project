import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchProjects() {
  console.log('in fetchProjects');
  try {
    const response = yield axios.get('/api/projects');
    console.log('response in fetchProjects in projectsSaga', response);
    yield put({ type: 'SET_PROJECTS', payload: response.data });
  } catch (error) {
    console.log('Projects get request failed', error);
  }
}

function* projectsSaga() {
  yield takeLatest('FETCH_PROJECTS', fetchProjects);
}

export default projectsSaga;
