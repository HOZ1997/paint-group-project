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

  //hooks for inputs
  // const [property, setProperty] = useState('');
  // const [building, setBuilding] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');

  // const [checkedInterior, setCheckedInterior] = useState(false);
  // const [checkedExterior, setCheckedExterior] = useState(false);
  // const [checkedCabinetry, setCheckedCabinetry] = useState(false);
  // const [checkedSpecialFeature, setCheckedSpecialFeature] = useState(false);

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
            Single Family Home
          </option>
          <option value="2">
            Commercial Building
          </option>
          <option value="3">Apartment</option>
          <option value="4">Condo</option>
          <option value="5">Duplex</option>
          <option value="6">Loft</option>
          <option value="7">Multi-tenant</option>
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
            Interior
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
            Exterior
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
            Cabinetry
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
            Special Feature
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
