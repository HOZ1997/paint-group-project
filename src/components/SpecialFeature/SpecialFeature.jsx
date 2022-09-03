import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';
//import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
function SpecialFeature() {

  const dispatch = useDispatch();
  const specialFeature = useSelector((store) => store.specialFeature);


    const onInputChange = (key) => (event) => {
      const updatedInput = {
        ...specialFeature,
        [key]: event.target.value
      }
      specialFeatureReducer(updatedInput);
    }

    const onCheckboxChange = (key) => (event) => {
      const updatedCheckbox = {
        ...specialFeature,
        [key]: event.target.checked
      }
      specialFeatureReducer(updatedCheckbox);
    }

    const specialFeatureReducer = (updatedInput) => {
      // let SFpayload = specialFeatures;
     console.log('in Special feature function', specialFeature);
      dispatch({type: 'SET_SPECIAL_FEATURE', payload: updatedInput});
    }

  return (
    <div>
      {/* <LanguageToggleButton /> Removing this functionality for now */}
      <div>
        <form>
          <h2>Special Feature</h2>
          <label>
            Type
            <select
            name="specialFeatureType"
            onChange={onInputChange('specialfeatureexterior_type_id')}
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
              onChange={onInputChange('specialfeature_paintproduct')}
              placeholder="Special Feature Product"
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={specialFeature.isspecialfeaturestatus_needprimer}
              onChange={onCheckboxChange('isspecialfeaturestatus_needprimer')}
            />
            Needs Primer
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="patchingIsChecked"
              checked={specialFeature.isspecialfeaturestatus_patchedrepair}
              onChange={onCheckboxChange('isspecialfeaturestatus_patchedrepair')}
            />
             Needs Patching / Repair
          </label>
          <br />


          <label>
            <input
              type="checkbox"
              checked={specialFeature.isspecialfeaturestatus_extensivescraping}
              onChange={onCheckboxChange('isspecialfeaturestatus_extensivescraping')}
            />
            Extensive Scraping
          </label>

          <br></br>
          <br></br>
          <label for="specialFeatureNotes">
          Notes
        </label>
        <br></br>
        <input
          type="text"
          onChange={onInputChange(
            "specialfeature_notes"
          )}
        ></input>

        </form>
        <br />
      </div>
    </div>
  )
}

export default SpecialFeature;
