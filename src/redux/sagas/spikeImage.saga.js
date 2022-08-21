import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* uploadImage(action) {
  console.log('IN SPIKE IMAGE SAGA', action.payload);
  try {
    const response = yield axios.post('/api/spikeUploadImage', action.payload);
    console.log(' BACK FROM UPLOAD IMAGE POST:', response.data);
    yield put({type: 'SET_IMAGE', payload: response.data}); 
    yield put({type: 'ADD_TO_ARRAY', payload: response.data});
    // yield axios.post('/api/spikeUploadImage/database', action.payload );
  } catch (err) {
    console.log('Error in upload Image saga:', err);
    alert('Error in upload Image saga')
  }
}

function* spikeImageSaga() {
  yield takeLatest('SEND_IMAGE', uploadImage);
}

export default spikeImageSaga;