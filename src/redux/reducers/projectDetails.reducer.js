const projectDetailsInput = {
    project_propertytype_id: '',
    project_buildingtype_id: '',
    isproject_typeinterior: false,
    isproject_typeexterior: false,
    isproject_typecabinetry: false,
    isproject_typespecialfeature: false,
    project_startdate: '',
    project_complete_specificdate: '',
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