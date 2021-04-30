import React from "react";
import notiActions from "../redux/actions/notiActions";
import scoreActions from "../redux/actions/scoreActions";
import playerActions from "../redux/actions/playerActions";
import { useDispatch, useSelector } from "react-redux";
import utils from "../utils/utils";

function MisteryBox() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.score);
  const date = useSelector((state) => state.player.date);
  const time = useSelector((state) => state.player.time);
  const price = time * 100;
  const resTimeMinutes =
    1440 - Math.round((Date.now() - (date - 43200000)) / (1000 * 60));
  const handleClick = (buy) => {
    const randomMultiply = Math.round(Math.random() * Math.random() * 1.75);
    if (buy === true && score < price) {
      return alert("Not enough points to buy this item");
    }
    if (buy === true) {
      dispatch(scoreActions.sumScore(-price));
    }
    if (resTimeMinutes > 0 && !buy) {
      return alert("You have to wait the time boy!");
    }
    dispatch(
      notiActions.setNoti({
        msg:
          "You received " +
          utils.numberFormat(score * randomMultiply) +
          " points",
        title: randomMultiply === 0 ? "Bad luck :(" : "Congratulations :D",
      })
    );
    dispatch(scoreActions.sumScore(score * randomMultiply));
    if (buy !== true) {
      dispatch(playerActions.setDate(Date.now()));
    }
  };

  return (
    <div className="col-md-3">
      <img
        src="https://cdn.pixabay.com/photo/2019/12/22/09/45/box-set-4712162_960_720.png"
        className="img-fluid my-3"
        alt="Mistery Box"
      ></img>
      <button
        className="btn btn-outline-success btn-block"
        onClick={handleClick}
        disabled={resTimeMinutes > 0 ? "disabled" : null}
      >
        Free Box {resTimeMinutes > 0 ? "(" + resTimeMinutes + "min)" : null}
      </button>
      <button
        className="btn btn-success btn-block"
        onClick={() => handleClick(true)}
      >
        Buy Box ({utils.numberFormat(price)}p)
      </button>
    </div>
  );
}

export default MisteryBox;
