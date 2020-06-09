import React, { forwardRef, useRef, useEffect } from "react";

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (
        <div className="check-wrap">
            <input type="checkbox" ref={resolvedRef} {...rest} />
            <label className="checkbox-custom-label"></label>
        </div>
    );
});

export default IndeterminateCheckbox;
