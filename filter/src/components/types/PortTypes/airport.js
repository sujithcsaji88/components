import React,{useState,useEffect} from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Airport(props){
    const [labelName, setLabelName] = useState();
    const [labelType, setLabelType] = useState();
  
    useEffect(() => {
      if (props.type === 'Airport') {
        setLabelName(props.name);
        setLabelType(props.type);
      }
    }, [props]);
  
    const closeAirport = () => {
      setLabelName("");
      setLabelType("");
    };
    if(labelType==='Airport'){
    return(
      <div>
      <div className="displayFlex">
        <div className="alignLeft">
          <p>{labelName}</p>
          <span>&nbsp;&gt;&nbsp;</span>
          <p>{labelType}</p>
        </div>
        <div className="marginLeft">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => {
              closeAirport();
              props.clearValues();
            }}
          />
        </div>
      </div>
      <div className="displayFlex">
        <input
          type="text"
          placeholder="filter"
          className="form-control"
          onChange={(e)=>{props.valueToSave(e,labelName,labelType)}}
        ></input>
      </div>
    </div>
    )
  }
  else return <div></div>
  }