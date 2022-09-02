import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveSpecialFeature(action) {
  console.log('in fetchProjects');
  try {
    const response = yield axios.post('/api/add_special_feature', action.payload);
    console.log('in SF Saga posting', response);
  } catch (error) {
    console.log(' Special Feature post request failed', error);
  }
}

function* saveSpecialFeatureSaga() {
  yield takeLatest('SAVE_SPECIALFEATURE', saveSpecialFeature);
}

export default saveSpecialFeatureSaga;