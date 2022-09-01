import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

// let SpecialFeature = ({state, parentHandleChange, index}) => {
let SpecialFeature = () => {
    let dispatch = useDispatch();
    const store = useSelector((store) => store);
    const specialFeatureInputs = useSelector((store) => store.specialFeature);

    const onInputChange = (key) => (event) => {
      const updatedInput = {
        ...specialFeatureInputs,
        [key]: event.target.value
      }
      saveSpecialFeature(updatedInput);
    }

    const saveSpecialFeature = (updatedInput) => {
      // let SFpayload = specialFeatures;

      // console.log('sending SF data to DB (in SF component now)', SFpayload);
      dispatch({type: 'SAVE_SF', payload: updatedInput});
    }

  const onCheckboxChange = (key) => (event) => {
    const updatedCheckbox = {
      ...specialFeatureInputs,
      [key]: event.target.checked
    }
    saveSpecialFeature(updatedCheckbox);
  }

  const handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    parentHandleChange(index, event);
  }

  return (
    <div>
      {/* <LanguageToggleButton /> Removing this functionality for now */}
      <div className = "specialFeatureClass">
        <form>
          <h2>Special Feature</h2>
          <label>
            Type
            <select
            name="specialFeatureType"
            onChange={onInputChange('specialFeatureType')}
            >
              <option value="0"></option>
              <option value="1">Soffits</option>
              <option value="2">Fascia</option>
              <option value="3">Gate</option>
              <option value="4">Gutters</option>
              <option value="5">Columns</option>
              <option value="6">Dormers</option>
              <option value="7">Handrails</option>
              <option value="8">Deck</option>
              <option value="9">Porch</option>
              <option value="10">Fence</option>
            </select>
          </label>
          <br />
          <label>
            Product (Paint, Varnish, etc.)
            <input
              type="text"
              name="specialFeatureProduct"
              // value={state.specialFeatureProduct}
              onChange={onInputChange('specialFeatureProduct')}

            />
          </label>
          <br />
          <label>
            Needs Primer
            <input
              type="checkbox"
              name="primerIsChecked"
              checked={specialFeatureInputs.primerIsChecked}
              onChange={onCheckboxChange('primerIsChecked')}
            />
          </label>
          <br />
          <label>
            Needs Patching / Repair
            <input
              type="checkbox"
              name="patchingIsChecked"
              checked={specialFeatureInputs.patchingIsChecked}
              onChange={onCheckboxChange('patchingIsChecked')}
            />
          </label>
          <br />
          <label>
            Extensive Scraping
            <input
              type="checkbox"
              name="scrapingIsChecked"
              checked={specialFeatureInputs.scrapingIsChecked}
              onChange={onCheckboxChange('scrapingIsChecked')}
            />
          </label>
          <br />
          <label>
            Notes
            <textarea
              name="specialFeatureNotes"
              // value={state.specialFeatureNotes}
              onChange={onInputChange('specialFeatureNotes')}

            />
          </label>
        </form>
        <br />
      </div>
    </div>
  )
}

export default SpecialFeature;
