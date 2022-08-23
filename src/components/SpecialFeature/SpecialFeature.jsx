import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

let SpecialFeature = () => {

  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <div>
      <h2>Special Features</h2>
    </div>
  )

}

export default SpecialFeature;
