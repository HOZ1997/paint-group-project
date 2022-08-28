const projectScopeInput = {
    isexteriorprep_powerwash: false,
    isexteriorprep_scrape: false,
    isexteriorprep_mildew: false,
    isexteriorwarranty_oneyear: false,
    isexteriorwarranty_threeyear: false,
    isexteriorwarranty_fiveyear: false,
    
    
  }

const projectScopeReducer = (state = projectScopeInput, action) => {
    console.log('in projectScope reducer', action.payload);
    switch (action.type) {
      case 'SET_PROJECT_SCOPE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default projectScopeReducer;