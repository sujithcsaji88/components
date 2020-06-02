import React , { useEffect } from 'react';
import spreadsheet from './components/slickgrid'	

const App = () => {
  useEffect(() => {
    spreadsheet();
  }, []);
  return <div id="iCargoSpreadSheet" className="slickgrid-container"></div>;
};

export default App;

