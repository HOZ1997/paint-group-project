import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function LoginForm() {
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
      <h2>LOGIN</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
        </label>
      </div>
      <div>
        <input
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
    </form>
  );
}

export default LoginForm;
