import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function ProjectDetails() {

  const projectDetails = useSelector((store) => store.projectDetails);

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
      [key]: event.target.value
    }
    projectDetailsReducer(updatedInput);
  }

  const onCheckboxChange = (key) => (event) => {
    const updatedCheckbox = {
      ...projectDetails,
      [key]: event.target.checked
    }
    projectDetailsReducer(updatedCheckbox);
  }

  const projectDetailsReducer = (updatedInput) => {
    console.log('in projectDetailsReducer function', projectDetails);
    dispatch ({type: 'SET_PROJECT_DETAILS', payload: updatedInput})
  }

  return (
    <div>
      <h2>Project Details</h2>
        <div>
          <p>Property Type</p>
          <select className='property_type' onChange={onInputChange('property_type')}>
            <option selected="true" disabled>Select Property Type</option>
            <option value='1'>Residential</option>
            <option value='2'>Commercial</option>
            <option value='3'>New Construction</option>
          </select>

          <p>Bulding Type</p>

          <select className='building_type' onChange={onInputChange('building_type')}>
            <option value='1'>Single Family Home</option>
            <option value='2'>Commercial Building</option>
            <option value='3'>Apartment</option>
            <option value='4'>Condo</option>
            <option value='5'>Duplex</option>
            <option value='6'>Loft</option>
            <option value='7'>Multi-tenant</option>
          </select>

          <p>Project Type</p>

          <label>
            <input type='checkbox'
            checked={projectDetails.project_interior}
            onChange={onCheckboxChange('project_interior')}
            />
            Interior
          </label>

          <label>
            <input type='checkbox'
            checked={projectDetails.project_exterior}
            onChange={onCheckboxChange('project_exterior')}
            />
            Exterior
          </label>

          <label>
            <input type='checkbox'
            checked={projectDetails.project_cabinetry}
            onChange={onCheckboxChange('project_cabinetry')}
            />
            Cabinetry
          </label>

          <label>
            <input type='checkbox'
            checked={projectDetails.project_specialFeature}
            onChange={onCheckboxChange('project_specialFeature')}
            />
            Special Feature
          </label>

          <br/>
          <br/>

          <p>Desired Project Start Date</p>
          <input
          type='date'
          value={projectDetails.project_start_date}
          onChange={onInputChange('project_start_date')}
          ></input>

          <br/>
          
          <p>Desired Project End Date</p>
          <input
          type='date'
          value={projectDetails.project_end_date}
          onChange={onInputChange('project_end_date')}
          ></input>
        </div>
    </div>
  );
}

export default ProjectDetails;
