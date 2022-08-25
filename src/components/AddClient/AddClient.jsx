import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddClient.css';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddClient() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const dispatch=useDispatch();
    const history = useHistory ();
    const clienttypes=useSelector((store) => store.clienttype);
    const client=useSelector((store) => store.client );
    const store = useSelector((store )=>store);
     

    useEffect(() => {
        dispatch({type: 'FETCH_CLIENTTYPE'});
    }, []);


    const [heading, setHeading]=useState('Add Client');
    const [selectClientType, setClientType]=useState('');
    const [newClientFirstLastName, setNewClientFirstLastName]=useState('');
    const [newDecisionFirstLastName, setNewDecisionFirstLastName]=useState('');
    const [newDecisionEmailAddress, setNewDecisionEmailAddress]=useState('');
    const [newDecisionPhoneNumber, setNewDecisionPhoneNumber]=useState('');
    const [newProjectAddress1, setNewProjectAddress1]=useState('');
    const [newProjectAddress2, setNewProjectAddress2]=useState('');
    const [newProjectAddressCity, setNewProjectAddressCity]=useState('');
    const [newProjectAddressState, setNewProjectAddressState]=useState('');
    const [newProjectAddressZip, setNewProjectAddressZip]=useState('');
    const [newProjectHouseYear, setNewProjectHouseYear]=useState('');
    const [newProjectAddressNotes, setNewProjectAddressNotes]=useState('');

    const changeClientType=(event) => {
        setClientType(event.target.value);
        console.log('in change clienttype', event.target.value);
        }
    const setClientFirstLastName=(event) => {
        setNewClientFirstLastName(event.target.value);
        console.log('in change client first last name');
        }
    const setDecisionFirstLastName=(event) => {
         setNewDecisionFirstLastName(event.target.value);
         }
     const setDecisionEmailAddress=(event) => {
         setNewDecisionEmailAddress(event.target.value);
         }

      const setDecisionPhoneNumber=(event) => {
         setNewDecisionPhoneNumber(event.target.value);
         }

        const setProjectAddress1=(event) => {
        setNewProjectAddress1(event.target.value);
          }

          const setProjectAddress2=(event) => {
            setNewProjectAddress2(event.target.value);
          }

          const setProjectAddressCity=(event) => {
            setNewProjectAddressCity(event.target.value);
          }

            const setProjectAddressState=(event) => {
            setNewProjectAddressState(event.target.value);
             }

         const setProjectAddressZip=(event) => {
          setNewProjectAddressZip(event.target.value);
             }
        const setProjectHouseYear=(event) => {
         setNewProjectHouseYear(event.target.value);
         }

        const setProjectAddressNotes=(event) => {
         setNewProjectAddressNotes(event.target.value);
         }




    const addClient=(event) => {
        // if (client_firstlast_name === "" || decision_firstlast_name === "") {
        //     alert('please fill out all fields.');
            //break; 
        // } else {
            // new item object
         const newClientInput ={
           client_type_id: selectClientType,
           client_firstlast_name: newClientFirstLastName,
           decision_firstlast_name: newDecisionFirstLastName,
           decision_emailaddress: newDecisionEmailAddress,
           decision_phonenumber: newDecisionPhoneNumber,
           project_address_1: newProjectAddress1,
           project_address_2: newProjectAddress2,
           project_address_city: newProjectAddressCity, 
           project_address_state: newProjectAddressState,
           project_address_zip: newProjectAddressZip,
           project_house_year: newProjectHouseYear,
           project_address_notes: newProjectAddressNotes,
          user_id: store.user.id
         
        }
        // dispatch with new item as payload
        console.log('in addClient', newClientInput);
        dispatch ({type: 'ADD_CLIENT', payload: newClientInput});
        history.push ('/addproject');
        //  <p>{JSON.stringify(newItem)}</p>
    }
    return (

        <div className="container">
          <h2>{heading}</h2>
        
        
        <div className="dropdownSelector"> 
    
            {clienttypes.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>Client Type</div>
            )}

            
             {/* <h3>{JSON.stringify(clienttypes)}</h3> */}
            
            <select onChange={changeClientType}>
            <option selected="true" disabled="disabled">Select Client Type</option>
                {clienttypes.map(client_type => (
                    <option key={client_type.id} value={client_type.id}>{client_type.client_type_name}</option>
                ))}
            </select>


            <div id="customerTextInputs"></div>
            <label for="clientName"> Client First and Last Name</label>
            <input type="text" placeholder="Client First and Last Name" onChange={event => setClientFirstLastName(event)}></input>
            <label for="decisionMakerName"> Decision Maker First and Last Name</label>
            <input type="text" placeholder="Decision First and Last Name" onChange={event => setDecisionFirstLastName(event)}></input>
            <label for="decsionMakerEmail"> Decision Maker Email</label>
            <input type="text" placeholder="Decision Maker Email" onChange={event => setDecisionEmailAddress(event)}></input>
            <label for="decsionMakerPhone"> Decision Maker Phone</label>
            <input type="text" placeholder="Decision Maker Phone" onChange={event => setDecisionPhoneNumber(event)}></input>
            <label for="projectAddress1">Project Address 1</label>
            <input type="text" placeholder="Project Address 1" onChange={event => setProjectAddress1(event)}></input>
            <label for="projectAddress2">Project Address 2</label>
            <input type="text" placeholder="Project Address 2" onChange={event => setProjectAddress2(event)}></input>
            <label for="projectCity">Project City</label>
            <input type="text" placeholder="Project City" onChange={event => setProjectAddressCity(event)}></input>
            <label for="projectState"> Project State</label>
            <input type="text" placeholder="Project State" onChange={event => setProjectAddressState(event)}></input>
             <label for="projectZip">Project Zip</label>
            <input type="text" placeholder=" Project Zip" onChange={event => setProjectAddressZip(event)}></input>
             <label for="projectHouseYear">House Year</label><br></br>
            <input type="text" placeholder="Project House Year" onChange={event => setProjectHouseYear(event)}></input>
            <label for="projectAddressNotes">Address Notes</label><br></br>
            <input type="text" placeholder=" Project Address Notes" onChange={event => setProjectAddressNotes(event)}></input>

            

            
      
            <button button type="button" className="btn" onClick={addClient}>Next</button>
             
         
            </div>
        </div>
    );
}

export default AddClient;
