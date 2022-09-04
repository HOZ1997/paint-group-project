import React, { useEffect } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import "./AddClient.css";

function AddClient() {
  // consts for imports
  const dispatch = useDispatch();
  const clienttypes = useSelector(
    (store) => store.clienttype
  );
  const client = useSelector(
    (store) => store.client
  );

  // useEffect for fetching clients
  useEffect(() => {
    dispatch({ type: "FETCH_CLIENTTYPE" });
  }, []);

  // function to push input changes to reducer
  const onInputChange = (key) => (event) => {
    const updatedInput = {
      ...client,
      [key]: event.target.value,
    };
    addClient(updatedInput);
  };

  // function to call reducer
  const addClient = (updatedInput) => {
    // dispatch with new item as payload
    dispatch({
      type: "SET_CLIENT",
      payload: updatedInput,
    });
  };

  return (
    <div className="container">
      <h2>ADD CLIENT</h2>
      <div className="addClientFirst">
        <div className="dropdownSelector">
          {clienttypes.length === 0 && (
            <div>Loading...</div>
          )}


          <select
            onChange={onInputChange(
              "client_type_id"
            )}
          >
            <option
              selected="true"
              disabled="disabled"
            >
              SELECT CLIENT TYPE
            </option>
            {clienttypes.map((client_type) => (
              <option
                key={client_type.id}
                value={client_type.id}
              >
                {client_type.client_type_name}
              </option>
            ))}
          </select>
        </div>

        <div id="customerTextInputs"></div>
        <label for="clientName">
          {" "}
          CLIENT FIRST AND LAST NAME
        </label>
        <input
          type="text"
          // placeholder="Client First and Last Name"
          onChange={onInputChange(
            "client_firstlast_name"
          )}
        ></input>
        <br />
        <label for="decisionMakerName">
          {" "}
          DECISION MAKER FIRST AND LAST NAME
        </label>
        <input
          type="text"
          // placeholder="Decision First and Last Name"
          onChange={onInputChange(
            "decision_firstlast_name"
          )}
        ></input>
        <br />
        <label for="decsionMakerEmail">
          {" "}
          DECISION MAKER EMAIL
        </label>
        <input
          type="text"
          // placeholder="Decision Maker Email"
          onChange={onInputChange(
            "decision_emailaddress"
          )}
        ></input>
        <br />
        <label for="decsionMakerPhone">
          {" "}
          DECISION MAKER PHONE
        </label>
        <input
          type="text"
          // placeholder="Decision Maker Phone"
          onChange={onInputChange(
            "decision_phonenumber"
          )}
        ></input>
        <br />
        <label for="projectAddress1">
          PROJECT ADDRESS 1
        </label>
        <input
          type="text"
          // placeholder="Project Address 1"
          onChange={onInputChange(
            "project_address_1"
          )}
        ></input>
        <br />
        <label for="projectAddress2">
          PROJECT ADDRESS 2
        </label>
        <input
          type="text"
          // placeholder="Project Address 2"
          onChange={onInputChange(
            "project_address_2"
          )}
        ></input>
        <br />
        <label for="projectCity">
          PROJECT CITY
        </label>
        <input
          type="text"
          // placeholder="Project City"
          onChange={onInputChange(
            "project_address_city"
          )}
        ></input>
        <br />
        <label for="projectState">
          {" "}
          PROJECT STATE
        </label>
        <input
          type="text"
          // placeholder="Project State"
          onChange={onInputChange(
            "project_address_state"
          )}
        ></input>
        <br />
        <label for="projectZip">
          PROJECT ZIP
        </label>
        <input
          type="text"
          // placeholder=" Project Zip"
          onChange={onInputChange(
            "project_address_zip"
          )}
        ></input>
        <br />
        <label for="projectHouseYear">
          HOUSE YEAR
        </label>
        <br></br>
        <input
          type="text"
          // placeholder="Project House Year"
          onChange={onInputChange(
            "project_house_year"
          )}
        ></input>
        <br />
        <label for="projectAddressNotes">
          ADDRESS NOTES
        </label>
        <br></br>
        <input
          type="text"
          // placeholder=" Project Address Notes"
          onChange={onInputChange(
            "project_address_notes"
          )}
        ></input>
         
      </div>
    </div>
  );
}

export default AddClient;
