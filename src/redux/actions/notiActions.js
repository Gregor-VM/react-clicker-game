import actionTypes from "../actionTypes";
const actions = {
  setNoti: (payload) => {
    return {
      type: actionTypes.SETNOTI,
      payload,
    };
  },
  delNoti: () => {
    return {
      type: actionTypes.DELNOTI,
    };
  },
};
export default actions;
