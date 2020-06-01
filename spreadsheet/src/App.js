import React , { Component } from 'react';
import spreadsheet from "./slickgrid";


class App extends Component {
  componentDidMount() {
    spreadsheet();
  }
  render () {


    return (
      <div>
          <div id="myGrid"  className="slickgrid-container"></div>
      </div>
    );
  }
}

export default App;
