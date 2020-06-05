import React, {Component} from 'react';

class DetailsEdit extends Component{
    getValue() {
		if (this) {
          const { flightModel, bodyType, startTime, type, 
            status, additionalStatus, timeStatus, endTime} = this;
          if (flightModel && bodyType && startTime && type && status && additionalStatus
            && timeStatus && endTime) {
            return { flightModel: flightModel.value, bodyType: bodyType.value,
            startTime: startTime.value, type: type.value ,status:status.value,
            additionalStatus: additionalStatus.value,
            timeStatus: timeStatus.value, endTime:endTime.value};
			}
		}
    }
    
    render(){
        const { value, onUpdate, ...rest } = this.props;
		return [
			<input
				{...rest}
				key={value.startTime}
				defaultValue={value.startTime}
				ref={(node) => (this.startTime = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
            />,
            <input
				{...rest}
				key={value.endTime}
				defaultValue={value.endTime}
				ref={(node) => (this.endTime = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
            />,
            <input
				{...rest}
				key={value.status}
				defaultValue={value.status}
				ref={(node) => (this.status = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
            <input
				{...rest}
				key={value.additionalStatus}
				defaultValue={value.additionalStatus}
				ref={(node) => (this.additionalStatus = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
            <input
				{...rest}
				key={value.flightModel}
				defaultValue={value.flightModel}
				ref={(node) => (this.flightModel = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
			<input
				{...rest}
				key={value.bodyType}
				defaultValue={value.bodyType}
				ref={(node) => (this.bodyType = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
            />,
            <input
				{...rest}
				key={value.type}
				defaultValue={value.type}
				ref={(node) => (this.type = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
            />,
            <input
				{...rest}
				key={value.timeStatus}
				defaultValue={value.timeStatus}
				ref={(node) => (this.timeStatus = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
		];
    }
}

export default DetailsEdit