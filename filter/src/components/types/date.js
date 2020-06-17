import React, { useState, useEffect } from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { DATE } from "../../constants/filtertypeconstants";

const Date = (props) => {
  const [labelName, setLabelName] = useState();
  const [field,setField]=useState();
  useEffect(() => {
    if (props.name === DATE) {
      setLabelName(props.name);
      setField(props.field)
    }
  }, [props]);

  const closeDate = () => {
    setLabelName("");
  };

  if (labelName === DATE) {
    return (
      <div>
        <div className="displayFlex">
          <div className="alignLeft">
            <Form.Label>
              <strong>Date</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check type="switch" id="date" label="" />
            <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
            <FontAwesomeIcon
              className="fontIcons"
              icon={faTimes}
              onClick={() => {
                closeDate();
                props.clearValue();
              }}
            />
          </div>
        </div>
        {field.map((field,index)=>{
           return(
           <div>
             <div className="displayFlex">
           <Form.Text className="text-muted">{field.name}</Form.Text>
         </div>
         <div className="displayFlex" >
           <Form.Control
             required
             type="text"
             placeholder="Filter"
             defaultValue=""
             className="col-lg-7 mr-3"
             onChange={(e)=>{props.dateSave(e,field.name,"date")}}
           />
         </div>
         </div>);
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Date;
