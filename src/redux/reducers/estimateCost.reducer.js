const newCostInput = {
  exteriorestimate_laborcost: 0,
  exteriorestimate_materialcost: 0,
  exteriorestimate_totalcost: 0,
};

const estimateCostReducer = (state = newCostInput, action) => {
  console.log('in estimateCost Reducer', action.payload);
  switch (action.type) {
    case 'SET_COST':
      let costEstimate = {
        ...action.payload,
        exteriorestimate_totalcost:
          action.payload.exteriorestimate_laborcost +
          action.payload.exteriorestimate_materialcost,
      };
      return costEstimate;
    default:
      return state;
  }
};

export default estimateCostReducer;
