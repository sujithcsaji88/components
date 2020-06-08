import React from "react";
import Logo from '../../assets/images/loading-spinner.gif';

const LoadingSpinner = (props) => {
    return (
        <div className="loading-spinner-container">
            <img className="loading-spinner" src={Logo} alt="Loading" />
        </div>
    );
};

export default LoadingSpinner;
