
const imageReducer = (state = [''], action) => {
    switch (action.type) {
      case 'SET_IMAGE':
        return [...state, action.payload];
      // case 'CLEAR_IMAGE':
      //   return state = [];
      default:
        return state;
    }
  };
  
  export default imageReducer;