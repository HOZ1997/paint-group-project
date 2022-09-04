import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {useHistory} from 'react-router-dom';

function RegisterForm() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(
    (store) => store.errors
  );
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form
      className="formPanel"
      onSubmit={registerUser}
    >
      <label>REGISTER USER</label>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className="registerFormClass">
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) =>
              setUsername(event.target.value)
            }
            placeholder="USERNAME"
          />
        </label>
      </div>
      <div className = "registerFormClass">
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="PASSWORD"
          />
        </label>
      </div>
      <div>
        <input
          className="myButtonBlue"
          type="submit"
          name="submit"
          value="REGISTER"
          id = "registerButton"
        />
      </div>
      <center>
        <button
          type="button"
          className="myButton"
          onClick={() => {
            history.push("/login");
          }}
        >
          LOGIN
        </button>
      </center>
    </form>
  );
}

export default RegisterForm;
