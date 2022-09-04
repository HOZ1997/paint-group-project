const newClientInput ={
  client_type_id: '',
  client_firstlast_name: '',
  decision_firstlast_name: '',
  decision_emailaddress: '',
  decision_phonenumber: '',
  project_address_1: '',
  project_address_2: '',
  project_address_city: '', 
  project_address_state: '',
  project_address_zip: '',
  project_house_year: '',
  project_address_notes: '',
  //user_id: store.user.id
}

const clientReducer = (state = newClientInput, action) => {
  console.log('in client reducer', action.payload);
  switch (action.type) {
      case 'SET_CLIENT':
        return action.payload;
      default:  
      return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default clientReducer;