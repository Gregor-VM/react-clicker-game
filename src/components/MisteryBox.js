import React from "react";

function MisteryBox() {
  return (
    <div className="col-md-3">
      <img
        src="https://cdn.pixabay.com/photo/2019/12/22/09/45/box-set-4712162_960_720.png"
        className="img-fluid my-3"
        alt="Mistery Box"
      ></img>
      <button className="btn btn-outline-success btn-block">Free Box</button>
      <button className="btn btn-success btn-block">Buy Box</button>
    </div>
  );
}

export default MisteryBox;
