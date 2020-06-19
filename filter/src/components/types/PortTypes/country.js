import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Country(props) {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();

  useEffect(() => {
    if (props.type === "Country") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
  }, [props]);

  const closeCountry = () => {
    setLabelName("");
    setLabelType("");
  };

  if (labelType === "Country") {
    return (
      <div className="filter__input">
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
                closeCountry();
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
      </div>
    );
  } else return <div></div>;
}
