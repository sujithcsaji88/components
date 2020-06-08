import React, { Component } from "react";

class UldPositionsEdit extends Component{
  /**
    "uldPositions": [
      {
        "position": "L3",
        "value": "5/9"
      },
      {
        "position": "Q6",
        "value": "2/7"
      },
      {
        "position": "L7",
        "value": "2/9"
      },
      {
        "position": "Q7",
        "value": "4/8"
      }
    ]
   */
  
    getValue() {
		if (this) {
      const { position, value } = this.props;
      var returnMap={};
      var returnList=[];
			if (value) {
        value.map((item,index)=>{
          returnMap={
            "position" :  item.position.value,
            "value": item.value.value
          };
          returnList.push(returnMap);
        })
      }
      console.log(returnList)
      return returnList;
		}
    }
    
    render(){
        const { value, ...rest } = this.props;
       return value.map((val, index)=>{
            return [
                <input
                    {...rest}
                    key={val.position}
                    defaultValue={val.position}
                    ref={(node) => (value[index].position= node)}
                    type='text'
                    style={{ width: "100%", marginBottom: "10px" }}
                />,
                <input
                    {...rest}
                    key={val.value}
                    defaultValue={val.value}
                    ref={(node) => (value[index].value= node)}
                    type='text'
                    style={{ width: "100%", marginBottom: "10px" }}
                />,
            ];
        })
    }
}

export default UldPositionsEdit