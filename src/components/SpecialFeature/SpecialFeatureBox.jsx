// Note: This page is meant to hold multiple SpecialFeature components.
//Everything has been changed quite a bit, but it may be useful for enabling multiple special components



// import React, { useState, useEffect, Children } from 'react';
// import { useHistory } from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';
// import './SpecialFeature.css';
// import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
// import SpecialFeature from './SpecialFeature';

// // CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';
// // let count = 0;
// let SpecialFeatureBox = () => {
//   // const [count, setCount] = useState(0);
//   const [specialFeatures, setSpecialFeatures] = useState([]);
//   // const arrayFromCount = [];




//   // let history = useHistory();
//   let dispatch = useDispatch();

//   const saveSpecialFeature = () => {
//     let SFpayload = specialFeatures;

//     console.log('sending SF data to DB (in SF component now)', SFpayload);
//     dispatch({type: 'SAVE_SF', payload: SFpayload});
//   }

//   // const goToNext = () => {
//   //   history.push('/scope');    //Figure out next page and put as target
//   // }

//   const addSpecialFeature = () => {
//     // setCount(count + 1);

//     // const buttonID = count + 'b';

//     // let countAndID = {
//     //   id: count,
//     //   buttonID: buttonID,
//     // }
//     // arrayFromCount.push(countAndID);
//     // count += 1;
//     setSpecialFeatures([...specialFeatures, {
//       specialFeatureType: '',
//       specialFeatureProduct: '',
//       primerIsChecked: false,
//       patchingIsChecked: false,
//       scrapingIsChecked: false,
//       specialFeatureNotes: '',
//       // id: count,
//     }]);
//   }

//   const handleChange = (index, event) => {
//     const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
//     // Copy the array
//     const copyOfFeatures = [...specialFeatures];
//     // Get the item
//     const item = {...copyOfFeatures[index], [event.target.name]: value};
//     copyOfFeatures[index] = item;
//     setSpecialFeatures(copyOfFeatures);
//   }

//   // const deleteSpecialFeature = (id) => {
//   //   // Remove feature with id
//   //   const filteredFeatures = specialFeatures.filter(feature => feature.id !== id);
//   //   console.log(filteredFeatures);
//   //   setSpecialFeatures(filteredFeatures);
//   // }

//   return (
//     <div>
//       <h2>Special Features</h2>
//       <button onClick={addSpecialFeature}>Add Special Feature</button>
//       {specialFeatures.map((feature, index) => <div key={index}><SpecialFeature parentHandleChange={handleChange} state={feature} index={index} /><br />
//       <button onClick={()=> deleteSpecialFeature(feature.id)}>Delete</button></div>)}
//       {specialFeatures.length ?
//       ( <div>
//           <button onClick={addSpecialFeature}>Add Special Feature</button>
//           <br />
//         </div>
//       ) : (<br />)}
//       {/* <button onClick={goToNext} className="nextButton">Continue</button> */}
//     </div>
//   )
// }

// export default SpecialFeatureBox;
