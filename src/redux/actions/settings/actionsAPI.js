import actionsReducer from './actionsReducer';
const actionsAPI = {};

actionsAPI.gantiBahasa = (data, callback) => dispatch => {
  return dispatch(actionsReducer.locale(data));
};

export default actionsAPI;
