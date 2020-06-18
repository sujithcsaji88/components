import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const list = (props) => {
  return (
    <div className="list">
      <div className="displayFlex">
        <div className="alignLeft">
          <FontAwesomeIcon icon={faAlignLeft} onClick={props.click}/>
          <div className="leftSpace">All flights</div>
        </div>
        {/* <div className="marginLeft">
          <div>Close Segment</div>
          <div>Open Segment</div>
          <div>...</div>
        </div> */}
      </div>
      <div className="secondList">
        <div className="displayFlex">
          <div className="listContent" onClick={props.clicked}><span>Origin:</span> FRA</div>
          <div className="listContent" onClick={props.clicked}><span>Date:</span> between 24 Apr - 9 May</div>
          <div onClick={props.clicked}>+ Add Filter</div>
        </div>
      </div>
    </div>
  );
};

export default list;
