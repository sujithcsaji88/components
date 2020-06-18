import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const list = (props) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px rgba(18, 43, 60, 0.298039215686275)" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faAlignLeft} />
          <h6>All flights</h6>
        </div>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <div>Close Segment</div>
          <div>Open Segment</div>
          <div>...</div>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h6 className="listContent">Origin: FRA</h6>
          <h6 className="listContent">Date: between 24 Apr - 9 May</h6>
          <h6>+ Add Filter</h6>
        </div>
      </div>
    </div>
  );
};

export default list;
