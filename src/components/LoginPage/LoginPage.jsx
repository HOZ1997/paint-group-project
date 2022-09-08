import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import FakeLoginForm  from '../FakeLoginForm/FakeLoginForm';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <div className="loginPageContainer">
        <img
          src="/images/Superstuct_logo.png"
          className="logo"
        />
        <LoginForm />
        <FakeLoginForm />
        <FakeLoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
