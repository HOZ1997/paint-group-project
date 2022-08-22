import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Field } from 'react-final-form';
import SpecialFeatureSub'./SpecialFeatureSub.jsx';
import './SpecialFeature.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

const SpecialFeature = () => {

  const [count, setCount] = useState(0);

  return (
    <h2>Special Features?</h2>
    <button onClick={() => setCount(count + 1)}>Add Special Feature</button>
    {[...Array(count)].map((_, index) => <SpecialFeatureSub key={index} />)}
  )
};

export default SpecialFeature;
