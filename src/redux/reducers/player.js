import actionTypes from "../actionTypes";

const initialState = {
  click: 5,
  time: 1,
  date: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETPLAYERCLICK:
      return { ...state, click: action.payload };
    case actionTypes.SETPLEAYERTIME:
      return { ...state, time: action.payload };
    case actionTypes.SETPLAYERDATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

export default reducer;
