import { combineReducers } from 'redux';
import settingReducer from './settings';

const rootReducers = combineReducers({
  settings: settingReducer
});

export default rootReducers;
