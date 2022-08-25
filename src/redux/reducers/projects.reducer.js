const projectsReducer = (state = [], action) => {
  console.log('in projectsReducer', action.payload);
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default projectsReducer;
