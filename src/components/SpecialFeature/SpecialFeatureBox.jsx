import React, { useState, useEffect, Children } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import SpecialFeature from './SpecialFeature';

const { v4: uuidv4 } = require('uuid');

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

let SpecialFeatureBox = () => {
  const [count, setCount] = useState(0);

  const arrayFromCount = [];

  let history = useHistory();

  const goToNext = () => {
    history.push('/scope');    //Figure out next page and put as target
  }

  const addSpecialFeature = () => {
    setCount(count + 1);

    const buttonID = count + 'b';

    let countAndID = {
      id: count,
      buttonID: buttonID,
    }
    arrayFromCount.push(countAndID);
  }



  return (
    <div>
      <h2>Special Features</h2>
      <button onClick={addSpecialFeature}>Add Special Feature</button>
      {[...Array(count)].map((_, index) => <div><SpecialFeature key={index} /><br />
      <button key={index + 'b'} onClick={()=> setCount(count - 1)}>Delete</button></div>)}
      {arrayFromCount.length ?
      ( <div>
          <button onClick={addSpecialFeature}>Add Special Feature</button>
          {/* <button key={uuidv4()} onClick={()=>
          {setCount(count - 1)}}
          >Delete</button> */}
          <br />
        </div>
      ) : (<br />)}
      <button onClick={goToNext} className="nextButton">Continue</button>
    </div>
  )
}

export default SpecialFeatureBox;
