import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* uploadImage(action) {
  console.log('IN SPIKE IMAGE SAGA', action.payload);
  try {
    const response = yield axios.post('/api/spikeUploadImage', action.payload);
    console.log(' BACK FROM UPLOAD IMAGE POST:', response.data);
    yield put({type: 'SET_IMAGE', payload: response.data}); 
  } catch (err) {
    console.log('Error adding image_Saga to DB:', err);
    alert('Error adding Image Saga from DB')
  }
}

function* spikeImageSaga() {
  yield takeLatest('SEND_IMAGE', uploadImage);
}

export default spikeImageSaga;