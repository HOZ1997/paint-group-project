const projectDetailsReducer = (state = {}, action) => {
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