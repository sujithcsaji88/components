import { AirPortCode, renderAirPortCode } from "../../stubs/AirPortCode";
import { Multiselect } from "multiselect-react-dropdown";

const AutoCompleteComponent = (props) => {
  const { plainArray } = this.state;
  return (
    <div>
      <Multiselect options={AirPortCode} displayValue="key" />
    </div>
  );
};

export default AutoCompleteComponent;
