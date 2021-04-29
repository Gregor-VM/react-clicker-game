import React from "react";
import { useSelector, useDispatch } from "react-redux";
import playerActions from "../redux/actions/playerActions";
import scoreActions from "../redux/actions/scoreActions";
import utils from "../utils/utils";

function BuyClickItem(props) {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.score);
  const player = useSelector((state) => state.player);
  const handleClick = () => {
    if (score < props.price) {
      return alert("Your score is not enough :(");
    }
    if (player.click >= props.click) {
      return alert("You already have this click power");
    }
    if (window.confirm("Are you sure?")) {
      dispatch(scoreActions.sumScore(-props.price));
      return dispatch(playerActions.setClick(props.click));
    }
  };
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={handleClick}
      disabled={player.click >= props.click ? "disabled" : null}
    >
      +{utils.numberFormat(props.click)} ({utils.numberFormat(props.price)}p)
    </button>
  );
}

export default BuyClickItem;
