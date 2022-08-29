import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <div className="loginPageContainer">
      <img src="/images/Superstuct_logo.png" className="logo" />
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
        </center>
        </div>
    </div>
    
  );
}

export default LoginPage;
