import { combineReducers } from 'redux';
// Import your individual reducers here
import authReducer from './authReducer'; // Adjust the path based on your structure

const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers as needed
});

export default rootReducer;
