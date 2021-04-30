import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="#">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/19/17/cursor-154478_960_720.png"
            alt="Logo Clicker Game"
            width="36"
            height="48"
            className="mr-2"
          ></img>
          <a className="navbar-brand">React Clicker Game</a>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
