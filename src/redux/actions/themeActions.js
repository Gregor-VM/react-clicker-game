import actionTypes from "../actionTypes";

const actions = {
  setTheme: (theme) => {
    return {
      type: actionTypes.SETTHEME,
      payload: theme,
    };
  },
};
export default actions;
