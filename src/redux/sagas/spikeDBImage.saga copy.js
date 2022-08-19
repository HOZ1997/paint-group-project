import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postURL(action) {
  console.log('IN POST URL SAGA', action.payload);
  try {
    yield axios.post('/api/spikeUploadImage/database', action.payload );
    console.log(' BACK FROM URL POST:', response.data);
  } catch (err) {
    console.log('Error adding image_Saga to DB:', err);
    alert('Error adding Image Saga to DB')
  }
}

function* spikeDBImageSaga() {
  yield takeLatest('POST_URL', postURL);
}

export default spikeDBImageSaga;