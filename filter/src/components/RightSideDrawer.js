import React,{useState,useEffect} from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button } from "react-bootstrap";



function DeparturePort(props){
  const[labelName,setLabelName]=useState();
  const[labelType,setLabelType]=useState();
  useEffect(
    ()=>{
      if(props.name==='Departure Port'){
      setLabelName(props.name)
      setLabelType(props.type)
      }
    }
    ,[props]);
    const closeDeparture=()=>{
      setLabelName('')
      setLabelType('')
    }
  if(labelName==="Departure Port"){
  return(
    <div>
         <div className="displayFlex">
          <div className="displayFlex">
            <p>{labelName}</p>
            <span>&gt;</span>
            <p>{labelType}</p>
          </div>
          <div className="marginLeft">
            <FontAwesomeIcon icon={faTimes} onClick={closeDeparture} />
          </div>
        </div>
        <div className="displayFlex">
          <input
            type="text"
            placeholder="filter"
            className="form-control"
          ></input>
        </div>
        </div>
  );}
  else{
  return <div></div>
  }
}
function ArrivalPort(props){
  const[labelName,setLabelName]=useState();
  const[labelType,setLabelType]=useState();
  useEffect(
    ()=>{
      if(props.name==='Arrival Port'){
      setLabelName(props.name)
      setLabelType(props.type)
      }
    }
    ,[props]);
    const closeArrival=()=>{
      setLabelName('')
      setLabelType('')
    }
  if(labelName==='Arrival Port'){
    return(
      <div>
        <div className="displayFlex">
          <div className="displayFlex">
            <p>{labelName}</p>
            <span>&gt;</span>
            <p>{labelType}</p>
          </div>
          <div className="marginLeft">
            <FontAwesomeIcon icon={faTimes} onClick={closeArrival} />
          </div>
        </div>
        <div className="displayFlex">
          <input
            type="text"
            placeholder="filter"
            className="form-control"
          ></input>
        </div>
      </div>
    )
  }
  else
  return <div></div>
}

function Date(props){
  const[labelName,setLabelName]=useState();
  useEffect(
    ()=>{
      if(props.name==='Date'){
      setLabelName(props.name)
      }
    }
    ,[props]);
    const closeDate=()=>{
      setLabelName('')
    }
    if(labelName==='Date'){
  return( <div>
    <div className="displayFlex">
          <div className="displayFlex">
            <Form.Label>
              <strong>Date</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check type="switch" id="custom-switch" label="" />
            <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
            <FontAwesomeIcon className="fontIcons" icon={faTimes} onClick={closeDate} />
          </div>
        </div>
        <div className="displayFlex">
          <Form.Text className="text-muted">Date from and Time</Form.Text>
        </div>
        <div className="displayFlex">
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-7 mr-3"
          />
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-4"
          />
        </div>
        <div className="displayFlex">
          <Form.Text className="text-muted">Date from and Time</Form.Text>
        </div>
        <div className="displayFlex">
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-7 mr-3"
          />
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-4"
          />
        </div>
  </div>
  );
}
else{
  return <div></div>
}
}
function Revenue(props){
  const[labelName,setLabelName]=useState();
  useEffect(
    ()=>{
      if(props.name==='Revenue'){
      setLabelName(props.name)
      }
    }
    ,[props]);
    const closeRevenue=()=>{
      setLabelName('')
    }
    if(labelName==='Revenue'){
  return(
    <div>
    <div className="displayFlex">
    <div className="displayFlex">
      <Form.Label>
        <strong>Revenue</strong>
      </Form.Label>
    </div>
    <div className="marginLeft">
      {/* <Form.Check type="switch" id="custom-switch" label="" /> */}
      <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
      <FontAwesomeIcon className="fontIcons" icon={faTimes} onClick={closeRevenue}/>
    </div>
  </div>
  <div className="displayFlex">
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Text className="text-muted">Condition</Form.Text>
      <Form.Control as="select">
        <option>equals</option>
        <option>not equals to</option>
        <option>less than</option>
        <option>greater than</option>
        <option>less or equal</option>
        <option>greater or equal</option>
        <option>contains</option>
        <option>does not match</option>
        <option>starts with</option>
        <option>in between</option>
      </Form.Control>
    </Form.Group>
  </div>
  <div className="displayFlex">
    <Form.Group>
      <Form.Text className="text-muted">Amount</Form.Text>
      <Form.Control
        required
        type="text"
        placeholder="Amount"
        defaultValue=""
      />
    </Form.Group>
  </div>
  </div>
  )
    }
    else
    return <div></div>
}

const rightSideDrawer = (props) => {
  return (
    <React.Fragment>
      <div className="rightSideDrawer">
        <DeparturePort name={props.name} type={props.type}/>
        <ArrivalPort name={props.name} type={props.type}/>
        <Date name={props.name}/>
        <Revenue name={props.name}/>
      </div>
      <div className="">
        <Button variant="primary">Save</Button>{" "}
        <Button variant="primary">Reset</Button>{" "}
        <Button variant="primary">Apply Filter</Button>{" "}
      </div>
    </React.Fragment>
  );
};

export default rightSideDrawer;
