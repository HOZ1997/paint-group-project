import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* estimateCost(action) {
  console.log('IN ESTIMATECOST SAGA');
  try {
    const response = yield axios.post('/api/estimatecost', action.payload);
    console.log(' BACK FROM estimated cost POST:', response.data);
    yield put({type: 'SET_COST', payload: response.data});
  } catch (err) {
    console.log('Error in estimate cost saga:', err);
   // alert('Error in estimate cost saga');
  }
}

function* estimateCostSaga() {
  yield takeLatest('PUSH_ESTIMATEDCOST', estimateCost);
}

export default estimateCostSaga;
