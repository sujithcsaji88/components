import React , { Component } from 'react';
import spreadsheet from './components/slickgrid';
import Header from './components/Header/Header';


class App extends Component {
  componentDidMount() {
    spreadsheet();
  }
  render () {
    return (
      <div>
        <Header/>
          <div id="iCargoSpreadSheet"  className="slickgrid-container"></div>
      </div>
    );
  }
}
export default App;