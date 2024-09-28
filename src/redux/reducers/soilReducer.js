const initialState = {
    soils: [],
  };
  
  const soilReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SOIL':
        return { ...state, soils: [...state.soils, action.payload] };
      default:
        return state;
    }
  };
  
  export default soilReducer;
  