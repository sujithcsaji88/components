import React, { useState } from "react";
import RowDelete from "../../images/RowDelete.svg";
import RowEdit from "../../images/RowEdit.svg";
import RowPin from "../../images/RowPin.png";

const RowOptions = () => {
    const [isOpen, setOpen] = useState(false);

    const openOverlay = () => {
        setOpen(true);
    };

    const closeOverlay = () => {
        setOpen(false);
    };

    return (
        <div className="row-options-edit-wrap">
            <span className="icon-edit" onClick={openOverlay}>
                <i></i>
                <i></i>
                <i></i>
            </span>
            <div className={`row-options-edit ${isOpen ? "open" : "close"}`}>
                <ul>
                    <li>
                        <span>
                            <i>
                                <img src={RowEdit} alt="cargo" />
                            </i>
                            <span>Edit</span>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i>
                                <img src={RowPin} alt="cargo" width="15" height="15" />
                            </i>
                            <span>Pin This row</span>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i>
                                <img src={RowDelete} alt="cargo" />
                            </i>
                            <span>Delete</span>
                        </span>
                    </li>
                </ul>
                <span className="close" onClick={closeOverlay}>
                    <i class="fa fa-close"></i>
                </span>
            </div>
        </div>
    );
};

export default RowOptions;