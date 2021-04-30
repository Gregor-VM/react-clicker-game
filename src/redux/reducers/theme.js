import actionTypes from "../actionTypes";

const initialState = {
  theme: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETTHEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default reducer;
