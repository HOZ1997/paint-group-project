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

      {/* <center>
        
        </center> */}
        </div>
    </div>
    
  );
}

export default LoginPage;
