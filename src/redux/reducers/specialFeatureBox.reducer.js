const specialFeatureInput = {
    specialFeatureType: '',
    specialFeatureProduct: '',
    primerIsChecked: false,
    patchingIsChecked: false,
    scrapingIsChecked: false,
    specialFeatureNotes: '',
  };


const specialFeatureReducer = (state = specialFeatureInput, action) => {
    console.log('in specialFeature Reducer', action.payload);
    switch (action.type) {
      case 'SAVE_SF':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default specialFeatureReducer;