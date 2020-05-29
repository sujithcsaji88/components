import React , { Component } from 'react';
import spreadsheet from "./slidegrid";


class App extends Component {
  componentDidMount() {
    spreadsheet();
  }
  render () {


    return (
      <div>
          <div id="spreadsheet"></div>
      </div>
    );
  }
}

export default App;
