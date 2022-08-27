import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

let SpecialFeature = ({state, parentHandleChange, index}) => {

  // const [state, setState] = useState({
  //   specialFeatureType: '',
  //   specialFeatureProduct: '',
  //   primerIsChecked: false,
  //   patchingIsChecked: false,
  //   //reshapingIsChecked: false,
  //   //rotIsChecked: false,
  //   //caulkingIsChecked: false,
  //   scrapingIsChecked: false,
  //   //otherIsChecked: false,
  //   specialFeatureNotes: '',
  // });

  console.log('the current state is:', state);

  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  const handleChange = event => {
    parentHandleChange(index, event);
  }

  return (
    <div>
      {/* <LanguageToggleButton /> Removing this functionality for now */}
      {store.language === "english" ? (
      <div>
        <form>
          <label>
            Type
            <select
            name="specialFeatureType"
            value={state.specialFeatureType}
            onChange={handleChange}
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
          {/* <br />
          <label>
            Needs Reshaping
            <input
              type="checkbox"
              name="reshapingIsChecked"
              checked={state.reshapingIsChecked}
              onChange={handleChange}
            />
          </label> */}
          {/* <br />
          <label>
            Extensive Wood Rot
            <input
              type="checkbox"
              name="rotIsChecked"
              checked={state.rotIsChecked}
              onChange={handleChange}
            />
          </label> */}
          {/* <br />
          <label>
            Extensive Caulking
            <input
              type="checkbox"
              name="caulkingIsChecked"
              checked={state.caulkingIsChecked}
              onChange={handleChange}
            />
          </label> */}
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
          {/* <br />
          <label>
            Other
            <input
              type="checkbox"
              name="otherIsChecked"
              checked={state.otherIsChecked}
              onChange={handleChange}
            />
          </label> */}
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
        <button id="saveButton" onClick={saveSpecialFeature}>Save</button>
        <br />
        <br />
      </div>
      )
      :
      (

      <div>
        <h2>Característica Especial</h2>
        <form>
          <label>
            Tipo
            <select
            name="specialFeatureType"
            value={state.specialFeatureType}
            onChange={handleChange}
            >
              <option value="soffits">Sofitos</option>
              <option value="dormers">Claraboya</option>
              <option value="deck">Terraza</option>
              <option value="fascia">Fascia</option>
              <option value="gate">Portón</option>
              <option value="gutters">Canalones</option>
              <option value="columns">Columnas</option>
              <option value="handrails">Pasamanos</option>
              <option value="porch">Porche</option>
              <option value="fence">Valla</option>
            </select>
          </label>
          <br />
          <label>
            Producto (pintura, barniz, etc.)
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
            Necisita imprimación
            <input
              type="checkbox"
              name="primerIsChecked"
              checked={state.primerIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Necisita parches/reparaciones
            <input
              type="checkbox"
              name="patchingIsChecked"
              checked={state.patchingIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Necesita una remodelación
            <input
              type="checkbox"
              name="reshapingIsChecked"
              checked={state.reshapingIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Pudrición extensa de la madera
            <input
              type="checkbox"
              name="rotIsChecked"
              checked={state.rotIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Calafateo Extensivo
            <input
              type="checkbox"
              name="caulkingIsChecked"
              checked={state.caulkingIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Raspado Extensivo
            <input
              type="checkbox"
              name="scrapingIsChecked"
              checked={state.scrapingIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Otros/Otras
            <input
              type="checkbox"
              name="otherIsChecked"
              checked={state.otherIsChecked}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Notas
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
    </div>
  )
}

export default SpecialFeature;
