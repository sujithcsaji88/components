import React, { useState } from "react";
import "./scss/filter.scss";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  return (
    <div className="App">
      <input
        type="submit"
        value="+ add Filter"
        onClick={() => setShowSideDrawer(true)}
        className="dummy"
      />
      {showSideDrawer ? <SideDrawer /> : null}
    </div>
  );
}

export default App;
