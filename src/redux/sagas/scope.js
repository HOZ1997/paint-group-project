import axios from "axios";
import {
  put,
  takeLatest,
} from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_SONGS" actions
function* scopeSaga() {
  console.log("in setScope");
  try {
     put({
      type: "SET_SCOPE",
      payload: response.data,
    });
  } catch (error) {
    console.log(
      "Scope put request failed",
      error
    );
  }
}

function* projectsSaga() {
  yield takeLatest(
    "SET_SCOPE",
  );
}

export default scopeSaga;

