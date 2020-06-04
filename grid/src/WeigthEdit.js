import React, {Component} from 'react';

class WeightEdit extends Component{
    
    getValue() {
		if (this) {
            const { percentage, value} = this;
            if (percentage && value) {
              return { percentage: percentage.value, value: value.value};
              }
          }
    }
    
    render(){
        const { value, onUpdate, ...rest } = this.props;
        return [
			<input
				{...rest}
				key='weightPercentage'
				defaultValue={value.percentage}
				ref={(node) => (this.percentage = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
			</input>,
			<input
				{...rest}
				key='weightValue'
				defaultValue={value.value}
				ref={(node) => (this.value = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
			</input>,
		];
    }
}

export default WeightEdit