import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";

function ProjectScope() {
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
      <h2>PREPARATION</h2>

      <div className="checkboxLabelDiv">
        <label className="checkboxLabel">
          <input
            type="checkbox"
            className="checkboxClass"
            checked={
              projectScope.isexteriorprep_powerwash
            }
            onChange={onCheckboxChange(
              "isexteriorprep_powerwash"
            )}
          />
          POWER WASH PAINTABLE SURFACES
        </label>
        <br></br>
        <br></br>

        <label className="checkboxLabel">
          <input
            type="checkbox"
            className="checkboxClass"
            checked={
              projectScope.isexteriorprep_scrape
            }
            onChange={onCheckboxChange(
              "isexteriorprep_scrape"
            )}
          />
          SCRAPE LOOSE/CHIPPING SURFACES
        </label>

        <label className="checkboxLabel">
          <input
            type="checkbox"
            className="checkboxClass"
            checked={
              projectScope.isexteriorprep_mildew
            }
            onChange={onCheckboxChange(
              "isexteriorprep_mildew"
            )}
          />
          TREAT MILDEWED AREAS WITH MILDICIDE
        </label>
      </div>

      <div className="radioboxClass">
        <h2>WARRANTY</h2>
        <div className="checkboxLabelDiv">
          <label className="checkboxLabel">
            <input
              type="radio"
              className="radioButtonClass"
              checked={
                projectScope.isexteriorwarranty_oneyear
              }
              onChange={onCheckboxChange(
                "isexteriorwarranty_oneyear"
              )}
              name="warranty"
            />
            1-YEAR WARRANTY - COMPANY WARRANTS THE
            PAINTING OF EXTERIOR PAINTED SURFACES
            FOR A PERIOD OF ONE (1) YEARS, PER THE
            SPECIFIC CONTRACTED SCOPE OF WORK, AND
            WILL REPAIR NEWLY PAINTED AREAS IF
            PEELING, BLISTERING, FLAKING, OR
            COATING SEPARATION OCCURS. THIS
            WARRANTY IS LIMITED TO WORKMANSHIP.
            OUR WARRANTIES COVER PAINTING DEFECTS,
            BUT THEY DO NOT COVER AREAS OF FADING
            AND/OR DAMAGE DUE TO NORMAL WEAR AND
            TEAR, ABUSE, WEATHER, OR ACCIDENTAL
            DAMAGING OCCURRENCES
          </label>
          <br></br>
          <br></br>

          <label className="checkboxLabel">
            <input
              type="radio"
              className="radioButtonClass"
              checked={
                projectScope.isexteriorwarranty_threeyear
              }
              onChange={onRadioboxChange(
                "isexteriorwarranty_threeyear"
              )}
              name="warranty"
            />
            3-YEAR WARRANTY - COMPANY WARRANTS THE
            PAINTING OF EXTERIOR PAINTED SURFACES
            FOR A PERIOD OF ONE (3) YEARS, PER THE
            SPECIFIC CONTRACTED SCOPE OF WORK, AND
            WILL REPAIR NEWLY PAINTED AREAS IF
            PEELING, BLISTERING, FLAKING, OR
            COATING SEPARATION OCCURS. THIS
            WARRANTY IS LIMITED TO WORKMANSHIP.
            OUR WARRANTIES COVER PAINTING DEFECTS,
            BUT THEY DO NOT COVER AREAS OF FADING
            AND/OR DAMAGE DUE TO NORMAL WEAR AND
            TEAR, ABUSE, WEATHER, OR ACCIDENTAL
            DAMAGING OCCURRENCES
            <span className="checkmark"></span>
          </label>
          <br></br>
          <br></br>
          <label className="checkboxLabel">
            <input
              type="radio"
              className="radioButtonClass"
              checked={
                projectScope.isexteriorwarranty_fiveyear
              }
              onChange={onRadioboxChange(
                "isexteriorwarranty_fiveyear"
              )}
              name="warranty"
            />
            5-YEAR WARRANTY - COMPANY WARRANTS THE
            PAINTING OF EXTERIOR PAINTED SURFACES
            FOR A PERIOD OF ONE (5) YEARS, PER THE
            SPECIFIC CONTRACTED SCOPE OF WORK, AND
            WILL REPAIR NEWLY PAINTED AREAS IF
            PEELING, BLISTERING, FLAKING, OR
            COATING SEPARATION OCCURS. THIS
            WARRANTY IS LIMITED TO WORKMANSHIP.
            OUR WARRANTIES COVER PAINTING DEFECTS,
            BUT THEY DO NOT COVER AREAS OF FADING
            AND/OR DAMAGE DUE TO NORMAL WEAR AND
            TEAR, ABUSE, WEATHER, OR ACCIDENTAL
            DAMAGING OCCURRENCES
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProjectScope;
