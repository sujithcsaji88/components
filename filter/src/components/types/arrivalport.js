import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrivalPort = (props) => {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();

  useEffect(() => {
    if (props.name === "Arrival Port") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
  }, [props]);

  const closeArrival = () => {
    setLabelName("");
    setLabelType("");
  };

  if (labelName === "Arrival Port") {
    return (
      <div>
        <div className="displayFlex">
          <div className="alignLeft">
            <p>{labelName}</p>
            <span>&nbsp;&gt;&nbsp;</span>
            <p>{labelType}</p>
          </div>
          <div className="marginLeft">
            <FontAwesomeIcon icon={faTimes} onClick={closeArrival} />
          </div>
        </div>
        <div className="displayFlex">
          <input
            type="text"
            placeholder="filter"
            className="form-control"
          ></input>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default ArrivalPort;
