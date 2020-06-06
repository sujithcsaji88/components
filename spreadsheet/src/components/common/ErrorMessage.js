import React from "react";
import { GLOBAL_ERROR } from '../constants/ErrorConstants'

const ErrorMessage = (props) => {
    let { errorText } = props;
    errorText = errorText ? errorText : GLOBAL_ERROR;

    return (
        <div className="alert alert-danger" role="alert">
            {errorText}
        </div>
    );
};

export default ErrorMessage;
