import React from "react";
import Score from "./Score";
import Buy from "./Buy";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

function Game() {
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
