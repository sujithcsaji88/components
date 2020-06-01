import React , { Component } from 'react';
import spreadsheet from './components/slickgrid'

class App extends Component {
  componentDidMount() {
    spreadsheet();
  }
  render () {
    return (
      <div>
          <div id="iCargoSpreadSheet"  className="slickgrid-container"></div>
      </div>
    );
  }
}
export default App;