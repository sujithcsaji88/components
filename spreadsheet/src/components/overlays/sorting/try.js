import React, { useState } from 'react';
import cargodata from "../../../data.json"

let dataArray = [];
let List="";
let next=0;
export default function Try() {
    const [stateArray,setStateArray]=useState('');
    for (const item in cargodata[0]) {
        dataArray.push(item)
    }
   List=dataArray.map((item) => {
        return (
            <div id={item} onClick={handleClick}>
                {item}
            </div>
        );
    })
    const handleClick=(e)=>{
     console.log(e.target.id)
    }
    return(
      <div>
          {List}
      </div>  
    );
    

}