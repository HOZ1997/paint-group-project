import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ProjectScope() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const projectScope = useSelector(
    (store) => store.projectScope
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [heading, setHeading] = useState(
    "Project Scope"
  );

  const onCheckboxChange = (key) => (event) => {
    const updatedCheckbox = {
      ...projectScope,
      [key]: event.target.checked,
    };
    projectScopeReducer(updatedCheckbox);
  };

  const onRadioboxChange = (key) => (event) => {
    const updatedRadiobox = {
      ...projectScope,
      [key]: event.target.checked,
    };
    projectScopeReducer(updatedRadiobox);
  };

  const projectScopeReducer = (updatedInput) => {
    console.log(
      "in projectScopeReducer function",
      projectScope
    );
    dispatch({
      type: "SET_PROJECT_SCOPE",
      payload: updatedInput,
    });
  };

  return (
    <div className="projectScope">
      <h2>Preparation</h2>

      <div className="checkboxClass">
        <label>
          <input
            type="checkbox"
            checked={
              projectScope.isexteriorprep_powerwash
            }
            onChange={onCheckboxChange(
              "isexteriorprep_powerwash"
            )}
          />
          Power wash all paintable surfaces.
        </label>
        <br></br>
        <br></br>

        <label>
          <input
            type="checkbox"
            checked={
              projectScope.isexteriorprep_scrape
            }
            onChange={onCheckboxChange(
              "isexteriorprep_scrape"
            )}
          />
          Scrape all loose and chipping surfaces.
        </label>
        <br></br>
        <br></br>

        <label>
          <input
            type="checkbox"
            checked={
              projectScope.isexteriorprep_mildew
            }
            onChange={onCheckboxChange(
              "isexteriorprep_mildew"
            )}
          />
          Treat mildewed areas (if present) with
          mildicide.
        </label>
        <br></br>
        <br></br>
      </div>

      <div className="radioboxClass">
        <h2>Warranty</h2>

        <label>
          <input
            type="radio"
            checked={
              projectScope.isexteriorwarranty_oneyear
            }
            onChange={onCheckboxChange(
              "isexteriorwarranty_oneyear"
            )}
          />
          1-YEAR WARRANTY - Company warrants the
          painting of exterior painted surfaces
          for a period of one (1) years, per the
          specific contracted scope of work, and
          will repair newly painted areas if
          peeling, blistering, flaking, or coating
          separation occurs. This warranty is
          limited to workmanship. Our warranties
          cover painting defects, but they do not
          cover areas of fading and/or damage due
          to normal wear and tear, abuse, weather,
          or accidental damaging occurrences.
        </label>
        <br></br>
        <br></br>

        <label>
          <input
            type="radio"
            checked={
              projectScope.isexteriorwarranty_threeyear
            }
            onChange={onRadioboxChange(
              "isexteriorwarranty_threeyear"
            )}
          />
          3-YEAR WARRANTY - Company warrants the
          painting of exterior painted surfaces
          for a period of one (3) years, per the
          specific contracted scope of work, and
          will repair newly painted areas if
          peeling, blistering, flaking, or coating
          separation occurs. This warranty is
          limited to workmanship. Our warranties
          cover painting defects, but they do not
          cover areas of fading and/or damage due
          to normal wear and tear, abuse, weather,
          or accidental damaging occurrences.
          <span class="checkmark"></span>
        </label>
        <br></br>
        <br></br>
        <label>
          <input
            type="radio"
            checked={
              projectScope.isexteriorwarranty_fiveyear
            }
            onChange={onRadioboxChange(
              "isexteriorwarranty_fiveyear"
            )}
          />
          5-YEAR WARRANTY - Company warrants the
          painting of exterior painted surfaces
          for a period of one (5) years, per the
          specific contracted scope of work, and
          will repair newly painted areas if
          peeling, blistering, flaking, or coating
          separation occurs. This warranty is
          limited to workmanship. Our warranties
          cover painting defects, but they do not
          cover areas of fading and/or damage due
          to normal wear and tear, abuse, weather,
          or accidental damaging occurrences.
        </label>
      </div>
    </div>
  );
}

export default ProjectScope;
