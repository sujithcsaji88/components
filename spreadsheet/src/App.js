import React from "react";
import Spreadsheet from './components/slickgrid/slickgrid'
import Header from './components/Header/Header';
import Grid from './components/datagrid/datagrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Redirect exact from="/" to="slick" />
          <Route exact path="/slick" component={Spreadsheet}></Route>
          <Route exact path="/grid" component={Grid}></Route>
        </Switch>
      </div>
    </Router>
  );
}