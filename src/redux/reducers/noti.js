import actionTypes from "../actionTypes";

const initialState = {
  msg: "",
  title: "",
  done: false,
  show: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETNOTI:
      return {
        ...state,
        msg: action.payload.msg,
        title: action.payload.title,
        show: true,
      };
    case actionTypes.DELNOTI:
      return { initialState };
    default:
      return state;
  }
};

export default reducer;
