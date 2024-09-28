const initialState = {
    distributors: [],
  };
  
  const distributorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DISTRIBUTOR':
        return { ...state, distributors: [...state.distributors, action.payload] };
      default:
        return state;
    }
  };
  
  export default distributorReducer;
  