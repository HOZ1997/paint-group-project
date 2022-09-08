import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_FULLFORM" actions

function* updateFullform(action) {
  console.log ('in updateFullform saga');
    try {
      console.log ("data in update full from" ); //response.data
     const response = yield axios.put('api/fullform/update', action.payload);
     yield put({ type: 'FETCH_FULLFORM', payload: response.data });
     console.log ('in update saga return info')
     //fetchfullForm(); 
     } catch (error) {
      console.log('Update Full Form put request failed', error);
      }
   }



function* addingFullform(action) {
  try {
    const response = yield axios.post('/api/fullform/', action.payload);
    yield put({ type: 'FETCH_FULLFORM', payload: response.data });

  } catch (error) {
    console.log('Add Fullform put request failed', error);
  }
}

//This will need to be reworked with reducer using something else 
function* fetchFullform() {
  try {
    const response = yield axios.get('/api/fullform');
    yield put({ type: 'SET_FULLFORM', payload: response.data });
  } catch (error) {
    console.log('FullForm get request failed', error);
  }
}

function* fullformSaga() {
  yield takeLatest('ADD_FULLFORM', addingFullform);
  yield takeLatest('FETCH_FULLFORM', fetchFullform);
  yield takeLatest('UPDATE_FULLFORM', updateFullform);
}

export default fullformSaga;