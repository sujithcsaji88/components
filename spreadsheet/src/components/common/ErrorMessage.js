import React,{useState} from "react";
import { SEARCH_NOT_FOUNT_ERROR } from '../constants/ErrorConstants';

const ErrorMessage = (props) => {
    const[error,setError]=useState("")
    console.log(error)
    if(props.status=="invalid"){
    return (
        <div className="alert alert-danger" role="alert">
            {SEARCH_NOT_FOUNT_ERROR}
        </div>
    );
    }
    else return <div></div>
};

export default ErrorMessage;
