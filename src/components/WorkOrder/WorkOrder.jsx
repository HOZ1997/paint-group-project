import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function WorkOrder(props) {

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  //hooks for inputs
  const [property, setProperty] = useState();
  const [building, setBuilding] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  //hooks for checkboxes
  const [checked, setChecked] = useState(false);




  //function for checbox change

  return (
    <div>
      <h2>Project Component</h2>
        <div className='property_type'>
          <p>Property Type</p>

          <select className='property_type'>
            <option value='residential'>Residential</option>
            <option value='commercial'>Commercial</option>
            <option value='new_construction'>New Construction</option>
          </select>

          <p>Bulding Type</p>

          <select className='building_type'>
            <option value='single_family_home'>Single Family Home</option>
            <option value='commercial_building'>Commercial Building</option>
            <option value='apartment'>Apartment</option>
            <option value='condo'>Condo</option>
            <option value='duplex'>Duplex</option>
            <option value='loft'>Loft</option>
            <option value='multi_tenant'>Multi-tenant</option>
          </select>

          <p>Project Type</p>

          <label>
            <input type='checkbox'></input>
            Interior
          </label>

        </div>
    </div>
  );
}

export default WorkOrder;
