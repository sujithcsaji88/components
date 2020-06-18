import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function City(props) {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();

  useEffect(() => {
    if (props.type === "City") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
  }, [props]);

  const closeCity = () => {
    setLabelName("");
    setLabelType("");
  };

  if (labelType === "City") {
    return (
      <React.Fragment>
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
                closeCity();
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
            onChange={(e) => {
              props.valueToSave(e, labelName, labelType);
            }}
          ></input>
        </div>
      </React.Fragment>
    );
  } else return <div></div>;
}
