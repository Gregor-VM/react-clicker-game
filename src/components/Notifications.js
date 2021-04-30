import React from "react";
import { useSelector, useDispatch } from "react-redux";
import notiActions from "../redux/actions/notiActions";

function Notifications() {
  const noti = useSelector((state) => state.noti);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(notiActions.delNoti());
  };
  if (noti.show) {
    return (
      <div className="col-md-6 my-3">
        <div
          className={(theme === "light" ? "" : "bg-secondary") + " jumbotron"}
        >
          <h1
            className={(theme === "light" ? "" : "text-light") + " display-4"}
          >
            {noti.title}
          </h1>
          <p className={(theme === "light" ? "" : "text-light") + " lead"}>
            {noti.msg}
          </p>
          <div className="lead d-flex justify-content-center">
            <button className="btn btn-primary btn-lg" onClick={handleClick}>
              Okay!
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex align-items-center justify-content-center col-md-6">
      <p
        className={
          (theme === "light" ? "" : "text-light") + " lead text-center"
        }
      >
        Nothing here, if you are inspired, buy something for multiply your
        score!
      </p>
    </div>
  );
}

export default Notifications;
