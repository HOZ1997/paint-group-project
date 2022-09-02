import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* estimateCost(action) {
  try {
    console.log('IN ESTIMATECOST SAGA', action.payload);
    const response = yield axios.post('/api/estimatecost', action.payload);
    console.log(' BACK FROM UPLOAD IMAGE POST:', response.data);
    yield put({type: 'SET_COST', payload: response.data});
  } catch (err) {
    console.log('Error in estimate cost saga:', err);
    alert('Error in estimate cost saga');
  }
}

export default estimateCost;
