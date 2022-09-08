import React, {
  useState,
  useEffect,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";
import "./SpecialFeature.css";

function SpecialFeature() {
  const dispatch = useDispatch();
  const specialFeature = useSelector(
    (store) => store.specialFeature
  );

  const onInputChange = (key) => (event) => {
    const updatedInput = {
      ...specialFeature,
      [key]: event.target.value,
    };
    specialFeatureReducer(updatedInput);
  };

  const onCheckboxChange = (key) => (event) => {
    const updatedCheckbox = {
      ...specialFeature,
      [key]: event.target.checked,
    };
    specialFeatureReducer(updatedCheckbox);
  };

  const specialFeatureReducer = (
    updatedInput
  ) => {

    console.log(
      "in Special feature function",
      specialFeature
    );
    dispatch({
      type: "SET_SPECIAL_FEATURE",
      payload: updatedInput,
    });
  };

  return (
    <div>

      <div className="specialFeatureClass">
        <form>
          <h2>SPECIAL FEATURE</h2>
          <div className="container">
            <label>
              TYPE
              <select
                name="specialFeatureType"
                onChange={onInputChange(
                  "specialfeatureexterior_type_id"
                )}
              >
                <option value="0"></option>
                <option value="1">SOFFITS</option>
                <option value="2">FASCIA</option>
                <option value="3">GATE</option>
                <option value="4">GUTTERS</option>
                <option value="5">COLUMNS</option>
                <option value="6">DORMERS</option>
                <option value="7">
                  HANDRAILS
                </option>
                <option value="8">DECK</option>
                <option value="9">PORCH</option>
                <option value="10">FENCE</option>
              </select>
            </label>
            <br />
            <label>
              PRODUCT (PAINT, VARNISH, ETC.)
              <input
                type="text"
                name="specialFeatureProduct"

                onChange={onInputChange(
                  "specialfeature_paintproduct"
                )}
              />
            </label>
          </div>
          <br />
          <div className="checkboxLabelDiv">
            <label className="checkboxLabel">

              <input
                type="checkbox"
                name="primerIsChecked"
                className="checkboxClass"
                checked={
                  specialFeature.isspecialfeaturestatus_needprimer
                }
                onChange={onCheckboxChange(
                  "isspecialfeaturestatus_needprimer"
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
                  specialFeature.isspecialfeaturestatus_patchedrepair
                }
                onChange={onCheckboxChange(
                  "isspecialfeaturestatus_patchedrepair"
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
                  specialFeature.isspecialfeaturestatus_extensivescraping
                }
                onChange={onCheckboxChange(
                  "isspecialfeaturestatus_extensivescraping"
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
                name="specialfeature_notes"

                onChange={onInputChange(
                  "specialfeature_notes"
                )}
              />
            </label>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default SpecialFeature;
