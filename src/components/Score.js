import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import scoreActions from "../redux/actions/scoreActions";
import playerActions from "../redux/actions/playerActions";
import utils from "../utils/utils";

function Score() {
  const player = useSelector((state) => state.player);
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  const memoizeScoreTimeSum = useCallback(() => {
    dispatch(scoreActions.sumScore(player.time));
  }, [dispatch, player]);

  const memoizePlayerTimeSum = useCallback(
    (changeTime) => {
      dispatch(playerActions.setTime(changeTime));
    },
    [dispatch]
  );

  useEffect(() => {
    if (score > 100 && player.time < 5) {
      memoizePlayerTimeSum(5);
    }
    if (score > 1000 && player.time < 10) {
      memoizePlayerTimeSum(10);
    }
    if (score > 10000 && player.time < 100) {
      memoizePlayerTimeSum(100);
    }
    if (score > 100000 && player.time < 1000) {
      memoizePlayerTimeSum(1000);
    }
    if (score > 1000000 && player.time < 10000) {
      memoizePlayerTimeSum(10000);
    }
    if (score > 10000000 && player.time < 100000) {
      memoizePlayerTimeSum(100000);
    }
  }, [score, memoizePlayerTimeSum, player]);

  useEffect(() => {
    const timer = setInterval(() => {
      memoizeScoreTimeSum();
    }, 1000);
    return () => clearInterval(timer);
  }, [memoizeScoreTimeSum]);

  return (
    <div className="mt-5 row">
      <div className="col-md-12 d-flex justify-content-between p-0">
        <h1 className="display-4"> Score: {utils.numberFormat(score)} </h1>
        <span className="d-flex flex-column justify-content-center col-md-3 p-0">
          <h1 className="badge bg-secondary text-white">
            Time: {"+" + utils.numberFormat(player.time) + " per second"}
          </h1>
          <h1 className="badge bg-secondary text-white">
            Clicks: {"+" + utils.numberFormat(player.click) + " per click"}
          </h1>
        </span>
      </div>
      <button
        className="btn btn-success col-md-12 p-4"
        onClick={() => dispatch(scoreActions.sumScore(player.click))}
      >
        <h2 className="font-weight-light">Click me!</h2>
      </button>
    </div>
  );
}

export default Score;
