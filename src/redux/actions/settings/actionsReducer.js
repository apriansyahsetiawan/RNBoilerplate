import constants from '../../../constants/constants';

const actionsReducer = {};

actionsReducer.locale = data => ({
  type: constants.LOCALE,
  data: { locale: data }
});

export default actionsReducer;
