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
		const { value, onUpdate, ...rest } = this.props;
		return [
			<select
				{...rest}
				key={value.from}
				defaultValue={value.from}
				ref={(node) => (this.from = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
				<option value='FRA'>FRA</option>
				<option value='AAA'>AAA</option>
				<option value='BBB'>BBB</option>
				<option value='CCC'>CCC</option>
			</select>,
			<select
				{...rest}
				key={value.to}
				defaultValue={value.to}
				ref={(node) => (this.to = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
				<option value='DXB'>DXB</option>
				<option value='DDD'>DDD</option>
				<option value='EEE'>EEE</option>
				<option value='FFF'>FFF</option>
			</select>,
		];
	}
}

export default SegmentEdit;
