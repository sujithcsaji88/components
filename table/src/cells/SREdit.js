import React, { useState, useEffect } from "react";

const SREdit = ({ value: initialValue, row: { index }, column: { id }, updateMyData }) => {
    const [value, setValue] = useState(initialValue);
    const [oldValue] = useState(initialValue);
    const [isEdit, setEdit] = useState(false);

    const openEdit = (e) => {
        setEdit(true);
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const saveEdit = () => {
        setEdit(false);
        updateMyData(index, id, value);
    };

    const clearEdit = () => {
        setValue(oldValue);
        setEdit(false);
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return (
        <div className="sr-details content">
            <div className={`content-display ${isEdit ? "close" : "open"}`} onClick={openEdit}>
                {value}
            </div>
            <div className={`content-edit ${isEdit ? "open" : "close"}`}>
                <input type="text" value={value} onChange={onChange} />
                <button onClick={saveEdit}>OK</button>
                <button onClick={clearEdit}>Cancel</button>
            </div>
        </div>
    );
};

export default SREdit;
