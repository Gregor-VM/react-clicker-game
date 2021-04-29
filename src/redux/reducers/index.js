import { combineReducers } from "redux";
import score from "./score";
import player from "./player";
export default combineReducers({ score, player });
