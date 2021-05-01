import React, { useEffect, useCallback } from "react";
import Score from "./Score";
import Buy from "./Buy";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import playerActions from "../redux/actions/playerActions";
import scoreActions from "../redux/actions/scoreActions";

function Game() {
  const dispatch = useDispatch();
  const appData = useSelector((state) => state);

  const memoize = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    dispatch(scoreActions.setScore(data.score.score));
    dispatch(playerActions.setClick(data.player.click));
    dispatch(playerActions.setTime(data.player.time));
  }, [dispatch]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      memoize();
    }
  }, [memoize]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(appData));
  }, [appData]);

  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={(theme === "light" ? null : "bg-dark") + " h100vh"}>
      <NavBar></NavBar>
      <div className="container">
        <Score></Score>
        <Buy></Buy>
      </div>
    </div>
  );
}

export default Game;
