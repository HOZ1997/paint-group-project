import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './AddProject.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class AddClient extends React.Component {
 // const [lorem, ipsum] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  const history = useHistory();
  const inputData = {};

  setValue (event) {
    inputData[newOrExisting] = event.target.value;
    console.log(event.target.value)
  }


  // const loremPush = () => {
  //   history.push(`/`);
  // };
  render() {
    return
      <div className="container">
        <h2>Customer Info</h2>
        <div className="radioBox" onChange={event => this.setValue(event)}>
          <input type="radio" value="New" name="newOrExistingCustomer" /> New
          <input type="radio" value="Existing" name="newOrExistingCustomer" /> Existing
        </div>
        <div className="dropdownSelector">
          <select>
            <option>Homeowner</option>
            <option>Business Owner</option>
            <option>Contractor/Developer</option>
            <option>Realtor/Designer</option>
            <option>Landlord/Property Owner</option>
          </select>
        </div>
        <div id="customerTextInputs">
          <input id="repName" placeholder="Representative Name"></input>
          <label for="repName">Representative Name</label>
          <input id="businessName" placeholder="Business Name"></input>
          <label for="businessName">Business Name</label>
          <input id="clientName" placeholder="Client Name"></input>
          <label for="clientName">Client Name</label>
          <input id="decisionMakerName" placeholder="Decision-Maker Name"></input>
          <label for="decisionMakerName">Decision-Maker Name</label>
          <input type="email" id="email" placeholder="Email"></input>
          <label for="email">Email</label>
          <input type="tel" id="phone" placeholder="Phone"></input>
          <label for="phone">Phone #</label>
          <input id="address" placeholder="Address"></input>
          <label for="address">Address</label>
          <input id="yearBuilt" placeholder="Year Built"></input>
          <label for="yearBuilt">Year Built</label>
          <input id="notes" placeholder="Notes"></input>
          <label for="notes">Notes</label>
        </div>
        <div className="grid">

        </div>
      </div>
  }
}

export default AddProject;
