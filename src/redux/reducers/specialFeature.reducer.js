const specialFeatureInput = {
  specialfeatureexterior_type_id: '',
  specialfeature_paintproduct: '',
  isspecialfeaturestatus_needprimer: false,
  isspecialfeaturestatus_patchedrepair: false,
  isspecialfeaturestatus_extensivescraping: false,
  specialfeature_notes: '',
  };


const specialFeatureReducer = (state = specialFeatureInput, action) => {
    console.log('in specialFeature Reducer', action.payload);
    switch (action.type) {
      case 'SET_SPECIAL_FEATURE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default specialFeatureReducer;