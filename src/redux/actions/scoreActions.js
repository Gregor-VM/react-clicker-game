import actionTypes from "../actionTypes";
const actions = {
  setScore: (score) => {
    return {
      type: actionTypes.SETSCORE,
      payload: score,
    };
  },
  sumScore: (sum) => {
    return {
      type: actionTypes.SUMSCORE,
      payload: sum,
    };
  },
};
export default actions;
