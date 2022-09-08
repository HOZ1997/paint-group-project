import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getProject(action) {
  console.log('in fetchProjects');
  try {
    console.log('this should be id (in getProject saga', action.payload);
    const response = yield axios.get(`/api/get_project/${action.payload}`);
    console.log('response in fetchProjects in projectsSaga', response);
    yield put({ type: 'SET_PROJECT', payload: response.data });
  } catch (error) {
    console.log('Project get request failed', error);
  }
}

function* getProjectSaga() {
  yield takeLatest('FETCH_PROJECT', getProject);
}

export default getProjectSaga;
