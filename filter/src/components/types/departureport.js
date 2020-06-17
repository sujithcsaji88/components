import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEPARTURE_PORT } from "../../constants/filtertypeconstants";

const DeparturePort = (props) => {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();

  useEffect(() => {
    if (props.name === DEPARTURE_PORT) {
      setLabelName(props.name);
      setLabelType(props.type);
    }
  }, [props]);

  const closeDeparture = () => {
    setLabelName("");
    setLabelType("");
  };

  if (labelName === DEPARTURE_PORT) {
    return (
      <div>
        <div className="displayFlex">
          <div className="alignLeft">
            <p>{labelName}</p>
            <span>&nbsp;&gt;&nbsp;</span>
            <p>{labelType}</p>
          </div>
          <div className="marginLeft">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                closeDeparture();
                props.clearValues();
              }}
            />
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
  } else {
    return <div></div>;
  }
};

export default DeparturePort;
