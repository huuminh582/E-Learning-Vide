import { combineReducers } from '@reduxjs/toolkit';
import alertReducer from './alert/alert.slice';

const rootReducer = combineReducers({
  alert: alertReducer,
  // locate: locateReducer,
  // modal: modalReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
