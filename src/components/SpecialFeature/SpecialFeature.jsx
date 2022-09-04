import React, {
  useState,
  useEffect,
} from "react";
//import { useHistory } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from "react-redux";
import "./SpecialFeature.css";
import LanguageToggleButton from "../LanguageToggleButton/LanguageToggleButton";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

// let SpecialFeature = ({state, parentHandleChange, index}) => {
let SpecialFeature = () => {
  let dispatch = useDispatch();
  const store = useSelector((store) => store);
  const specialFeatureInputs = useSelector(
    (store) => store.specialFeature
  );

  const onInputChange = (key) => (event) => {
    const updatedInput = {
      ...specialFeatureInputs,
      [key]: event.target.value,
    };
    saveSpecialFeature(updatedInput);
  };

  const saveSpecialFeature = (updatedInput) => {
    // let SFpayload = specialFeatures;

    // console.log('sending SF data to DB (in SF component now)', SFpayload);
    dispatch({
      type: "SAVE_SF",
      payload: updatedInput,
    });
  };

  const onCheckboxChange = (key) => (event) => {
    const updatedCheckbox = {
      ...specialFeatureInputs,
      [key]: event.target.checked,
    };
    saveSpecialFeature(updatedCheckbox);
  };

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    parentHandleChange(index, event);
  };

  return (
    <div>
      {/* <LanguageToggleButton /> Removing this functionality for now */}
      <div className="specialFeatureClass">
        <form>
          <h2>SPECIAL FEATURE</h2>
          <label>
            TYPE
            <select
              name="specialFeatureType"
              className="addClientFirst"
              onChange={onInputChange(
                "specialFeatureType"
              )}
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
            PRODUCT (PAINT, VARNISH, ETC.)
            <input
              type="text"
              name="specialFeatureProduct"
              // value={state.specialFeatureProduct}
              onChange={onInputChange(
                "specialFeatureProduct"
              )}
            />
          </label>
          <br />
          <div className="checkboxLabelDiv">
            <label className="checkboxLabel">
              <input
                type="checkbox"
                name="primerIsChecked"
                className="checkboxClass"
                checked={
                  specialFeatureInputs.primerIsChecked
                }
                onChange={onCheckboxChange(
                  "primerIsChecked"
                )}
              />
              NEEDS PRIMER
            </label>
            <br />
            <label className="checkboxLabel">
              <input
                type="checkbox"
                name="patchingIsChecked"
                className="checkboxClass"
                checked={
                  specialFeatureInputs.patchingIsChecked
                }
                onChange={onCheckboxChange(
                  "patchingIsChecked"
                )}
              />
              NEEDS PATCHING / REPAIR
            </label>
            <br />
            <label className="checkboxLabel">
              <input
                type="checkbox"
                className="checkboxClass"
                name="scrapingIsChecked"
                checked={
                  specialFeatureInputs.scrapingIsChecked
                }
                onChange={onCheckboxChange(
                  "scrapingIsChecked"
                )}
              />
              EXTENSIVE SCRAPING
            </label>
          </div>
          <br />
          <div className="notesDiv">
          <label className="checkboxLabel">
            NOTES
            <textarea
              name="specialFeatureNotes"
              // value={state.specialFeatureNotes}
              onChange={onInputChange(
                "specialFeatureNotes"
              )}
            />
            </label>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
};

export default SpecialFeature;
