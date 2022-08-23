import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './SpecialFeature.css';
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';

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

  const store = useSelector((store) => store);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <LanguageToggleButton />
      {store.language === "english" ? (
      <div>
        <h2>Special Features</h2>
        <form>
          <label>
            Type
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
