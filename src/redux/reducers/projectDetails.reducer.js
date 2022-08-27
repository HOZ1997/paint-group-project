const projectDetailsInput = {
    property_type: '',
    building_type: '',
    project_interior: false,
    project_exterior: false,
    project_cabinetry: false,
    project_specialFeature: false,
    project_start_date: '',
    project_end_date: '',
  }

const projectDetailsReducer = (state = projectDetailsInput, action) => {
    console.log('in projectDetails reducer', action.payload);
    switch (action.type) {
      case 'SET_PROJECT_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default projectDetailsReducer;