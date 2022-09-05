import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function FakeLoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(
    (store) => store.errors
  );
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form className="fakeFormPanel" onSubmit={login}>
      <label className ="fakeFormPanelLabel">LOGIN</label>
    </form>
  );
}

export default FakeLoginForm;
