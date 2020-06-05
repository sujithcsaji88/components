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
            console.log("THIS ", this)
			const { position, value } = this;
			if (position && value) {
				return { position: position.value, value: value.value };
			}
		}
    }
    
    render(){
        const { value, ...rest } = this.props;
        console.log("value ", value)
       return value.map((val, index)=>{
            return [
                <input
                    {...rest}
                    key={val.position}
                    defaultValue={val.position}
                    ref={(node) => (val.position = node)}
                    type='text'
                    style={{ width: "100%", marginBottom: "10px" }}
                />,
                <input
                    {...rest}
                    key={val.value}
                    defaultValue={val.value}
                    ref={(node) => (val.value= node)}
                    type='text'
                    style={{ width: "100%", marginBottom: "10px" }}
                />,
            ];
        })
    }
}

export default UldPositionsEdit