import React, { Component } from "react";

class SegmentEdit extends Component {
	getValue() {
		if (this) {
			const { from, to } = this;
			if (
				from &&
				from.selectedOptions.length &&
				from.selectedOptions[0].value &&
				to &&
				to.selectedOptions.length &&
				to.selectedOptions[0].value
			) {
				return { from: from.selectedOptions[0].value, to: to.selectedOptions[0].value };
			}
		}
	}
	render() {
		const { airports, value, onUpdate, ...rest } = this.props;
		return [
			<select
				{...rest}
				key='from'
				defaultValue={value.from}
				ref={(node) => (this.from = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
				{airports.map((airport, index) => {
					return (
						<option key={index} value={airport}>
							{airport}
						</option>
					);
				})}
			</select>,
			<select
				{...rest}
				key='to'
				defaultValue={value.to}
				ref={(node) => (this.to = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
				{airports.map((airport, index) => {
					return (
						<option key={index} value={airport}>
							{airport}
						</option>
					);
				})}
			</select>,
		];
	}
}

export default SegmentEdit;
