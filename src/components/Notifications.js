import React from "react";
import { useSelector, useDispatch } from "react-redux";
import notiActions from "../redux/actions/notiActions";

function Notifications() {
  const noti = useSelector((state) => state.noti);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(notiActions.delNoti());
  };
  if (noti.show) {
    return (
      <div className="col-md-6 my-3">
        <div className="jumbotron">
          <h1 className="display-4">{noti.title}</h1>
          <p className="lead">{noti.msg}</p>
          <div className="lead d-flex justify-content-center">
            <button className="btn btn-primary btn-lg" onClick={handleClick}>
              Okay!
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default Notifications;
