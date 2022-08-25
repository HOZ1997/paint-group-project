import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ProjectScope(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState(
    "Project Scope"
  );
  const history = useHistory();

  return (
    <div className="projectScope">
      <h3>Preparation</h3>

      <div className="checkboxClass">
        <input
          type="checkbox"
          name="Preparation"
          value="powerWash"
          //if checked, set the state to true and send a dispatch to saga to update the database
          onChange={(e) => {
            if (e.target.checked) {
              props.dispatch({
                type: "SET_SCOPE",
                payload: {
                  scope: "Preparation",
                },
              });
            } else {
              props.dispatch({
                type: "UNSET_SCOPE",
                payload: {
                  scope: "powerWash",
                },
              });
            }
          }}
        />
        <label>
          Power wash all paintable surfaces.
        </label>
        <br></br>
        <input
          type="checkbox"
          name="Preparation"
          value="Chip"
        />
        <label>
          Scrape all loose and chipping surfaces.
        </label>
        <br></br>
        <input
          type="checkbox"
          name="Preparation"
          value="Mildew"
        />
        <label>
          Treat mildewed areas (if present) with
          mildicide.
        </label>
        <br></br>
        <br></br>
      </div>
      <div className="checkboxClass">
        <h3>Warranty</h3>
        <input
          type="checkbox"
          name="Warranty"
          value="oneyear"
        />
        <label>
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
        <input
          type="checkbox"
          name="Warranty"
          value="threeYear"
        />
        <label>
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
        </label>
        <br></br>
        <br></br>
        <input
          type="checkbox"
          name="Warranty"
          value="fiveYear"
        />
        <label>
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
      {/* create a button that navigates to /images and says "Next" */}
      <button
        onClick={() => history.push("/image")}
      >
        Next
      </button>
    </div>
  );
}

export default ProjectScope;
