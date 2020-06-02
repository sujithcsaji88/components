import React, { Component } from "react";

class FlightEdit extends Component {
	getValue() {
		if (this) {
			const { flightno, date } = this;
			if (flightno && date) {
				return { flightno: flightno.value, date: date.value };
			}
		}
	}
	render() {
		const { value, onUpdate, ...rest } = this.props;
		return [
			<input
				{...rest}
				key={value.flightno}
				defaultValue={value.flightno}
				ref={(node) => (this.flightno = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
			<input
				{...rest}
				key={value.date}
				defaultValue={value.date}
				ref={(node) => (this.date = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
		];
	}
}

export default FlightEdit;
