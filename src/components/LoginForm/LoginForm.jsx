import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function LoginForm() {
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
    <form className="formPanel" onSubmit={login}>
      <label>LOGIN</label>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="loginClass">
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            required
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />
        </label>
      </div>
      <div className="loginClass">
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            required
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
        </label>
      </div>
      <div className="loginClass">
        <input
          id = "loginButton"
          className="myButtonBlue"
          type="submit"
          name="submit"
          value="LOGIN"
        />
        <button
          type="button"
          className="myButton"
          onClick={() => {
            history.push("/registration");
          }}
        >
          CREATE ACCOUNT
        </button>
      </div>
      <div>
      </div>
    </form>
  );
}

export default LoginForm;
