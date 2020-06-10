import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SEARCH_NOT_FOUNT_ERROR } from '../constants/ErrorConstants'

const ErrorMessage = (props) => {
  if (props.status === "invalid") {
    return (
      <div id="errorMsg">
        <div className="alert alert-danger" role="alert">
          {SEARCH_NOT_FOUNT_ERROR}
        </div>
        <div className="notification-close" onClick={hideErrorMessage}>
          <FontAwesomeIcon icon={faTimes}/>
        </div>
      </div>
    );
  } else return <div></div>;
};

function hideErrorMessage() {
    
}

export default ErrorMessage;
