import { REHYDRATE } from 'redux-persist/lib/constants';
import constants from '../../constants/constants';

const initialState = {
  locale: 'id'
};

const settingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case constants.LOCALE:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default settingReducer;
