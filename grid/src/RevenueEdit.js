import React, {Component} from 'react';

class RevenueEdit extends Component{

    getValue() {
		if (this) {
            const { revenue, yeild} = this;
            if (revenue && yeild) {
              return { revenue: revenue.value, yeild: yeild.value};
              }
          }
        }

    render(){
        const { value, ...rest } = this.props;
        return [
			<input
				{...rest}
				key='revenue'
				defaultValue={value.revenue}
				ref={(node) => (this.revenue = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
			</input>,
			<input
				{...rest}
				key='revenueYeild'
				defaultValue={value.yeild}
				ref={(node) => (this.yeild = node)}
				type='text'
				style={{ width: "100%", marginBottom: "10px" }}
			>
			</input>,
		];

    }
}
export default RevenueEdit