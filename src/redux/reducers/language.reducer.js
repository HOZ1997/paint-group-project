const languageReducer = (state = "english", action) => {
  switch (action.type) {
    case "SET_ENGLISH":
      return "english";
    case "SET_SPANISH":
      return "spanish";
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default languageReducer;
