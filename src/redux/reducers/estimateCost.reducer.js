const costReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COST':
      return action.payload;
    default:
      return state;
  }
};

export default costReducer;
