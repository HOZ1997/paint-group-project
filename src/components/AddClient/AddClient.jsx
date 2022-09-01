import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './AddClient.css';

function AddClient() {

    // consts for imports
    const dispatch=useDispatch();
    const clienttypes = useSelector((store) => store.clienttype);
    const client = useSelector((store) => store.client );
    
    // useEffect for fetching clients
    useEffect(() => {
        dispatch({type: 'FETCH_CLIENTTYPE'});
    }, []);

    // function to push input changes to reducer
    const onInputChange = (key) => (event) => {
        const updatedInput = {
            ...client,
            [key]: event.target.value
        }
        addClient(updatedInput);
    }

    // function to call reducer
    const addClient = (updatedInput) => {
        // dispatch with new item as payload
        dispatch ({type: 'SET_CLIENT', payload: updatedInput});
    }

    return (
        <div className="container">
          <h2>Add Client</h2>
        <div className="dropdownSelector"> 
    
            {clienttypes.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>Client Type</div>
            )}
            
            <select onChange={onInputChange('client_type_id')}>
                {/* <option selected="true" disabled="disabled">Select Client Type</option> */}
                    {clienttypes.map(client_type => (
                        <option key={client_type.id} value={client_type.id}>{client_type.client_type_name}</option>
                    ))}
            </select>

            <div id="customerTextInputs"></div>
                <label for="clientName"> Client First and Last Name</label>
                <input type="text" placeholder="Client First and Last Name" onChange={onInputChange('client_firstlast_name')}></input>
                <label for="decisionMakerName"> Decision Maker First and Last Name</label>
                <input type="text" placeholder="Decision First and Last Name" onChange={onInputChange('decision_firstlast_name')}></input>
                <label for="decsionMakerEmail"> Decision Maker Email</label>
                <input type="text" placeholder="Decision Maker Email" onChange={onInputChange('decision_emailaddress')}></input>
                <label for="decsionMakerPhone"> Decision Maker Phone</label>
                <input type="text" placeholder="Decision Maker Phone" onChange={onInputChange('decision_phonenumber')}></input>
                <label for="projectAddress1">Project Address 1</label>
                <input type="text" placeholder="Project Address 1" onChange={onInputChange('project_address_1')}></input>
                <label for="projectAddress2">Project Address 2</label>
                <input type="text" placeholder="Project Address 2" onChange={onInputChange('project_address_2')}></input>
                <label for="projectCity">Project City</label>
                <input type="text" placeholder="Project City" onChange={onInputChange('project_address_city')}></input>
                <label for="projectState"> Project State</label>
                <input type="text" placeholder="Project State" onChange={onInputChange('project_address_state')}></input>
                <label for="projectZip">Project Zip</label>
                <input type="text" placeholder=" Project Zip" onChange={onInputChange('project_address_zip')}></input>
                <label for="projectHouseYear">House Year</label><br></br>
                <input type="text" placeholder="Project House Year" onChange={onInputChange('project_house_year')}></input>
                <label for="projectAddressNotes">Address Notes</label><br></br>
                <input type="text" placeholder=" Project Address Notes" onChange={onInputChange('project_address_notes')}></input>
            </div>
        </div>
    );
}

export default AddClient;
