const newCostInput = {
  exteriorestimate_laborcost: 0,
  exteriorestimate_materialcost: 0,
  exteriorestimate_totalcost: 0,
};

const costReducer = (state = newCostInput, action) => {
  console.log('in estimateCost Reducer', action.payload);
  switch (action.type) {
    case 'SET_COST':
      return action.payload;
    default:
      return state;
  }
};

export default costReducer;
