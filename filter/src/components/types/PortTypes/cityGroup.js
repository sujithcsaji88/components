import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CityGroup(props) {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();

  useEffect(() => {
    if (props.type === "City Group") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
  }, [props]);

  const closeCityGroup = () => {
    setLabelName("");
    setLabelType("");
  };

  if (labelType === "City Group") {
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
                closeCityGroup();
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
