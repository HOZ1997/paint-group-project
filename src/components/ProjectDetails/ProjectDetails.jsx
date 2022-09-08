import React, { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import "./ProjectDetails.css";

function ProjectDetails() {
  const projectDetails = useSelector(
    (store) => store.projectDetails
  );

  const dispatch = useDispatch();



  const onInputChange = (key) => (event) => {
    const updatedInput = {
      ...projectDetails,
      [key]: event.target.value,
    };
    projectDetailsReducer(updatedInput);
  };

  const onCheckboxChange = (key) => (event) => {
    const updatedCheckbox = {
      ...projectDetails,
      [key]: event.target.checked,
    };
    projectDetailsReducer(updatedCheckbox);
  };

  const projectDetailsReducer = (
    updatedInput
  ) => {
    console.log(
      "in projectDetailsReducer function",
      projectDetails
    );
    dispatch({
      type: "SET_PROJECT_DETAILS",
      payload: updatedInput,
    });
  };

  return (
    <div>
      <h2>PROJECT DETAILS</h2>
      <div className="projectDetails">
        <p>PROPERTY TYPE</p>
        <select
          className="addClientFirst"
          onChange={onInputChange(
            "project_propertytype_id"
          )}
        >
          <option
            selected="true"
            disabled
          ></option>
          <option value="1">RESIDENTIAL</option>
          <option value="2">COMMERCIAL</option>
          <option value="3">
            NEW CONSTRUCTION
          </option>
        </select>

        <p>BUILDING TYPE</p>

        <select
          className="addClientFirst"
          onChange={onInputChange(
            "project_buildingtype_id"
          )}
        >
          <option selected="true" disabled>
            SELECT BUILDING TYPE
          </option>
          <option value="1">
            SINGLE FAMILY HOME
          </option>
          <option value="2">
            COMMERCIAL BUILDING
          </option>
          <option value="3">APARTMENT</option>
          <option value="4">CONDO</option>
          <option value="5">DUPLEX</option>
          <option value="6">LOFT</option>
          <option value="7">MULTI-TENANT</option>
        </select>

        <p>PROJECT TYPE</p>
        <div className="checkboxLabelDiv">
          <label className="checkboxLabel">
            <input
              type="checkbox"
              className="checkboxClass"
              checked={
                projectDetails.project_interior
              }
              onChange={onCheckboxChange(
                "isproject_typeinterior"
              )}
            />
            INTERIOR
          </label>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              className="checkboxClass"
              checked={
                projectDetails.project_exterior
              }
              onChange={onCheckboxChange(
                "isproject_typeexterior"
              )}
            />
            EXTERIOR
          </label>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              className="checkboxClass"
              checked={
                projectDetails.project_cabinetry
              }
              onChange={onCheckboxChange(
                "isproject_typecabinetry"
              )}
            />
            CABINETRY
          </label>

          <label className="checkboxLabel">
            <input
              type="checkbox"
              className="checkboxClass"
              checked={
                projectDetails.project_specialFeature
              }
              onChange={onCheckboxChange(
                "isproject_typespecialfeature"
              )}
            />
            SPECIAL FEATURE
          </label>
        </div>

        <p>DESIRED PROJECT START DATE</p>
        <input
          type="date"
          value={
            projectDetails.project_start_date
          }
          onChange={onInputChange(
            "project_startdate"
          )}
        ></input>

        <br />

        <p>DESIRED PROJECT END DATE</p>
        <input
          type="date"
          value={projectDetails.project_end_date}
          onChange={onInputChange(
            "project_complete_specificdate"
          )}
        ></input>
      </div>
    </div>
  );
}

export default ProjectDetails;
