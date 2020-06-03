import React, { useEffect } from "react";
import spreadsheet from "./components/slickgrid";
import Header from "./components/Header/Header";

const App = () => {
  useEffect(() => {
    spreadsheet();
  }, []);
  return (
    <div>
      <Header />
      <div id="iCargoSpreadSheet" className="slickgrid-container"></div>
    </div>
  );
};
export default App;
