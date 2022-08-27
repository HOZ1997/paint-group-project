import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postURL(action) {
  console.log('IN POST URL SAGA', action.payload);
  try {
    yield axios.post('/api/uploadImage/database', action.payload );
    console.log('BACK FROM URL POST');
  } catch (err) {
    console.log('Error adding image_Saga to DB:', err);
    alert('Error adding Image Saga to DB')
  }
}

function* databaseImageSaga() {
  yield takeLatest('SAVE_URLS', postURL);
}

export default databaseImageSaga;