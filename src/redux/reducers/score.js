import actionTypes from "../actionTypes";

const initialState = {
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETSCORE:
      return { ...state, score: action.payload };
    case actionTypes.SUMSCORE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};

export default reducer;
