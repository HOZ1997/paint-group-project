
const imageReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_IMAGE':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default imageReducer;