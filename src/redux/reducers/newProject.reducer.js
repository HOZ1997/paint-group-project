const newProjectReducer = (state = [], action) => {
  console.log('in projectsReducer', action.payload);
  switch (action.type) {
    case 'GIVE_ID':
      console.log('in newProject reducer', action.payload);
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default newProjectReducer;
