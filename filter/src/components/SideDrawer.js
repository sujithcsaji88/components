import React, { useState, useRef, useEffect } from "react";
import RightSideDrawer from "./RightSideDrawer";
import LeftSideDrawer from "./LeftSideDrawer";

function useOuterClick(callback) {
  const innerRef = useRef();
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []);

  return innerRef;
}

const SideDrawer = () => {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();
  const [showDrawer, setShowDrawer] = useState(true);

  const passValues = (filterName, filterType) => {
    setLabelName(filterName);
    setLabelType(filterType);
  };

  const innerRef = useOuterClick((e) => {
    setShowDrawer(false);
    alert("clicked");
  });

  return (
    <div className="sideDrawer" ref={innerRef}>
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <LeftSideDrawer handleValue={passValues} />
        </div>
        <div className="col-md-7 col-lg-7">
          <RightSideDrawer name={labelName} type={labelType} />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
