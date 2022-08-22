const clienttypeReducer = (state = [], action) => {
    switch (action.type) {
       case 'SET_CLIENTTYPE':
          return action.payload;
        default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default clienttypeReducer;