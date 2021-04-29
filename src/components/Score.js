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
    <div className="d-flex flex-column mt-5">
      <h1 className="badge bg-primary text-white p-3">
        Score: {utils.numberFormat(score)}
      </h1>
      <button
        className="btn btn-success"
        onClick={() => dispatch(scoreActions.sumScore(player.click))}
      >
        Click me!
      </button>
    </div>
  );
}

export default Score;
