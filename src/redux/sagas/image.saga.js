import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* uploadImage(action) {
  console.log('IN IMAGE SAGA', action.payload);
  try {
    const response = yield axios.post('/api/uploadImage', action.payload);
    console.log(' BACK FROM UPLOAD IMAGE POST:', response.data);
    yield put({type: 'SET_IMAGE', payload: response.data}); 

  } catch (err) {
    console.log('Error in upload image saga:', err);
    alert('Error in upload image saga')
  }
}

function* imageSaga() {
  yield takeLatest('SEND_IMAGE', uploadImage);
}

export default imageSaga;