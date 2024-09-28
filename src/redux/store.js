import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import soilReducer from './reducers/soilReducer';
import distributorReducer from './reducers/distributorReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    soil: soilReducer,
    distributor: distributorReducer,
  },
});

export default store;
