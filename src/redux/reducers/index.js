import { combineReducers } from "redux";
import score from "./score";
import player from "./player";
import noti from "./noti";
import theme from "./theme";

export default combineReducers({ score, player, noti, theme });
