import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import themeActions from "../redux/actions/themeActions";
import scoreActions from "../redux/actions/scoreActions";
import playerActions from "../redux/actions/playerActions";
import notiActions from "../redux/actions/notiActions";

function NavBar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const handleSelect = (e) => {
    const theme = e.target.options[e.target.options.selectedIndex].value;
    dispatch(themeActions.setTheme(theme));
    localStorage.setItem("theme", theme);
  };
  const themeStorage = localStorage.getItem("theme");

  const memoize = useCallback(() => {
    dispatch(themeActions.setTheme("dark"));
  }, [dispatch]);

  useEffect(() => {
    if (themeStorage === "dark") {
      memoize();
    }
  }, [memoize, themeStorage]);

  const resetStatus = () => {
    dispatch(scoreActions.setScore(0));
    dispatch(playerActions.setClick(5));
    dispatch(playerActions.setTime(1));
    dispatch(playerActions.setDate(0));
    dispatch(notiActions.delNoti());
    localStorage.removeItem("data");
    localStorage.removeItem("date");
  };

  return (
    <nav
      className={
        (theme === "light"
          ? "navbar-light bg-light"
          : "navbar-dark bg-secondary border-bottom") + " navbar"
      }
    >
      <div className="container-fluid">
        <a href="/#">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/19/17/cursor-154478_960_720.png"
            alt="Logo Clicker Game"
            width="36"
            height="48"
            className="mr-2"
          ></img>
          <span className="navbar-brand" href="/">
            React Clicker Game
          </span>
        </a>
        <ul className="navbar-nav d-flex flex-row align-items-center ">
          <li className="nav-item mx-3">
            <select
              className={
                (theme === "light" ? "" : "bg-secondary text-white") +
                " form-select p-1"
              }
              aria-label="Theme"
              onChange={handleSelect}
              defaultValue={themeStorage}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </li>

          <li className="nav-item">
            <a
              className={
                (theme === "light" ? "text-dark" : "text-light") + " nav-link"
              }
              href="/#"
              onClick={resetStatus}
            >
              Reset Game
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
