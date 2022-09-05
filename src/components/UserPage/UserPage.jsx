import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import Projects from '../Projects/Projects';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div className='welcomeClass'>
        <h2>WELCOME, {user.username}!</h2>
        </div>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <Projects />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
