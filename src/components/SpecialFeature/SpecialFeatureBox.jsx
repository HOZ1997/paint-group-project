import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import SpecialFeature from './SpecialFeature';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

let SpecialFeatureBox = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Special Feature</button>
      {[...Array(count)].map((_, index) => <div><SpecialFeature key={index} /><br /><button onClick={()=> setCount()}>Delete</button></div>)}
      <button onClick={() => setCount(count + 1)}>Add Special Feature</button>
    </div>
  )
}

export default SpecialFeatureBox;
