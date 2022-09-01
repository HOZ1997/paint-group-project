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

//create a saga which updates "isexteriorwarranty_oneyear" in the database to true when the "SET_SCOPE" action is received
// function* setScope(action) {
//   try {
//     const response = yield axios.put(
//       `/api/projects/${action.payload.id}`,
//       action.payload
//     );
//     yield put({
//       type: "SET_SCOPE",
//       payload: response.data,
//     });
//   } catch (error) {
//     console.log(
//       "Scope put request failed",
//       error
//     );
//   }
// }
//
// function* scopeSaga() {
//   yield takeLatest("SET_SCOPE", setScope);
// }
//
// export default scopeSaga;
//
// import axios from "axios";
// import {
//   put,
//   takeLatest,
// } from "redux-saga/effects";