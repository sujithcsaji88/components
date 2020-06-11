import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SEARCH_NOT_FOUNT_ERROR } from '../constants/ErrorConstants'

const ErrorMessage = (props) => {
  //let status=props.status;
  const [status,setStatus] =useState(props.status);
  useEffect(
    ()=>{
      setStatus(props.status)
    }
  ,[props.status]);
  function hideErrorMessage(props) {
    setStatus("");
  }
  if (status === "invalid") {
    return (
      <div id="errorMsg">
        <div className="alert alert-danger" role="alert">
          {SEARCH_NOT_FOUNT_ERROR}
        </div>
        <div className="notification-close" >
          <FontAwesomeIcon icon={faTimes} onClick={hideErrorMessage}/>
        </div>
      </div>
    );
  } else return <div></div>;
};



export default ErrorMessage;
