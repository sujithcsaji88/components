import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const AppliedFilterPanel = (props) => {
  return (
    <div className="list">
      <div className="displayFlex">
        <div className="alignLeft">
          <FontAwesomeIcon icon={faAlignLeft} onClick={props.clicked}/>
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
          <div className="listContent" onClick={props.click}><span>Origin:</span> FRA</div>
          <div className="listContent" onClick={props.click}><span>Date:</span> between 24 Apr - 9 May</div>
          <div onClick={props.click}>+ Add Filter</div>
        </div>
      </div>
    </div>
  );
};

export default AppliedFilterPanel;
