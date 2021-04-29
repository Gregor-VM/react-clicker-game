import actionTypes from "../actionTypes";
const actions = {
  setTime: (time) => {
    return {
      type: actionTypes.SETPLEAYERTIME,
      payload: time,
    };
  },
  setClick: (click) => {
    return {
      type: actionTypes.SETPLAYERCLICK,
      payload: click,
    };
  },
};
export default actions;
