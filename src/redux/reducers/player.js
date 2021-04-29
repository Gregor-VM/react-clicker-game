import actionTypes from "../actionTypes";

const initialState = {
  click: 5,
  time: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETPLAYERCLICK:
      return { ...state, click: action.payload };
    case actionTypes.SETPLEAYERTIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export default reducer;
