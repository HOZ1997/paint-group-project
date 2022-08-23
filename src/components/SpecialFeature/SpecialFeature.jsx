import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

let SpecialFeature = () => {
  const [state, setState] = useState({
    specialFeatureType: '',
    specialFeatureProduct: '',
    specialFeatureNotes: '',
    primerIsChecked: false,
    patchingIsChecked: false,
    reshapingIsChecked: false,
    rotIsChecked: false,
    caulkingIsChecked: false,
    scrapingIsChecked: false,
    otherIsChecked: false,
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h2>Special Features</h2>
      <form>
        <label>
          Special Feature
          <select
          name="specialFeatureType"
          value={state.specialFeatureType}
          onChange={handleChange}
          >
            <option value="soffits">Soffits</option>
            <option value="dormers">Dormers</option>
            <option value="deck">Deck</option>
            <option value="fascia">Fascia</option>
            <option value="gate">Gate</option>
            <option value="gutters">Gutters</option>
            <option value="columns">Columns</option>
            <option value="handrails">Handrails</option>
            <option value="porch">Porch</option>
            <option value="fence">Fence</option>
          </select>
        </label>
        <br />
        <label>
          Special Feature Product
          <input
            type="text"
            name="specialFeatureProduct"
            value={state.specialFeatureProduct}
            onChange={handleChange}
            placeholder="Special Feature Product"
          />
        </label>
        <br />
        <label>
          Needs Primer
          <input
            type="checkbox"
            name="primerIsChecked"
            checked={state.primerIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Needs Patching / Repair
          <input
            type="checkbox"
            name="patchingIsChecked"
            checked={state.patchingIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Needs Reshaping
          <input
            type="checkbox"
            name="reshapingIsChecked"
            checked={state.reshapingIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Extensive Wood Rot
          <input
            type="checkbox"
            name="rotIsChecked"
            checked={state.rotIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Extensive Caulking
          <input
            type="checkbox"
            name="caulkingIsChecked"
            checked={state.caulkingIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Extensive Scraping
          <input
            type="checkbox"
            name="scrapingIsChecked"
            checked={state.scrapingIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Other
          <input
            type="checkbox"
            name="otherIsChecked"
            checked={state.otherIsChecked}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Notes
          <textarea
            name="specialFeatureNotes"
            value={state.specialFeatureNotes}
            onChange={handleChange}
            placeholder="Notes"
          />
        </label>
      </form>
    </div>
  )
}

export default SpecialFeature;
