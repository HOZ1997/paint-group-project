import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './AddProject.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function AddProject() {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  const history = useHistory();




  // const loremPush = () => {
  //   history.push(`/`);
  // };

  return (
    <div className="container">
      <h2>Intake Form</h2>

      <div className="grid">

      </div>
    </div>
  );
}

export default AddProject;
