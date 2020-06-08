import React, { Component } from "react";

class FlightEdit extends Component {
	getValue() {
		if (this) {
			const { flightno, date } = this;
			if (flightno && date) {
				return { flightno: flightno.value, date: this.getDate(new Date(date.value)) };
			}
		}
	}

	getDate=(date, type)=>{
		if(type ==="calendar"){
			const dateTimeFormat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });
			const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
			return`${year}-${month}-${day}`
		}
		else{
			const dateTimeFormat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" });
			const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
			return`${year}-${month.toUpperCase()}-${day}`;
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
				defaultValue={this.getDate(new Date(value.date), "calendar")}
				ref={(node) => (this.date = node)}
				type='date'
				style={{ width: "100%", marginBottom: "10px" }}
			/>,
		];
	}
}

export default FlightEdit;

