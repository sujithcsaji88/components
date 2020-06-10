import React, { useState, useEffect, useRef, Suspense } from "react";
import Spreadsheet from "./components/slickgrid/slickgrid";
import Grid from "./components/datagrid/datagrid";
import CargoData from "./stubs/CargoData.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoadingSpinner from "./components/common/LoadingSpinner";
let searchKey;
export default function App() {
  const [data, setData] = useState();
  const [load,setLoad]=useState("true");
  const [status,setStatus]=useState("")
//   console.log(CargoData)
//   for(let i = 0; i < CargoData.length; i++){
//     CargoData.flightModel = String(CargoData.flightModel);
//  }
//  console.log(CargoData)
  const rows = CargoData.map((CargoData) => {
    return {
      key: CargoData.travelId,
      travelId: CargoData.travelId,
      flightno: CargoData.flightno,
      date: CargoData.date,
      segmentfrom: CargoData.segmentfrom,
      segmentto: CargoData.segmentto,
      flightModel: CargoData.flightModel,
      bodyType: CargoData.bodyType,
      type: CargoData.type,
      startTime: CargoData.startTime,
      endTime: CargoData.endTime,
      status: CargoData.status,
      additionalStatus: CargoData.additionalStatus,
      timeStatus: CargoData.timeStatus,
      weightpercentage: CargoData.weightpercentage,
      weightvalue: CargoData.weightvalue,
      volumepercentage: CargoData.volumepercentage,
      volumevalue: CargoData.volumevalue,
      uldposition1: CargoData.uldposition1,
      uldvalue1: CargoData.uldvalue1,
      uldposition2: CargoData.uldposition2,
      uldvalue2: CargoData.uldvalue2,
      uldposition3: CargoData.uldposition3,
      uldvalue3: CargoData.uldvalue3,
      uldposition4: CargoData.uldposition4,
      uldvalue4: CargoData.uldvalue4,
      revenue: CargoData.revenue,
      yeild: CargoData.yeild,
      sr: CargoData.sr,
      queuedBookingSR: CargoData.queuedBookingSR,
      queuedBookingvolume: CargoData.queuedBookingvolume,
    };
  });

  useEffect(() => {
    setData(rows);
  }, []);
  
  const getSearchWord = (e) => {
    if(!e.target.value.match("^[a-zA-Z ]*$")){
      setLoad("false");
      console.log(load)
    }
    searchKey = String(e.target.value).toLowerCase();
    console.log(searchKey);
    let filteredRows = rows.filter((item) => {
      return (
        (item.flightno && item.flightno.toLowerCase().includes(searchKey)) ||
        (item.date && item.date.toLowerCase().includes(searchKey)) ||
        (item.segmentfrom && item.segmentfrom.toLowerCase().includes(searchKey)) ||
        (item.segmentto && item.segmentto.toLowerCase().includes(searchKey)) ||
        String(item.flightModel).includes(searchKey) ||
        (item.bodyType && item.bodyType.toLowerCase().includes(searchKey)) ||
        (item.type && item.type.toLowerCase().includes(searchKey)) ||
        (item.startTime && item.startTime.toLowerCase().includes(searchKey)) ||
        (item.endTime && item.endTime.toLowerCase().includes(searchKey)) ||
        (item.status && item.status.toLowerCase().includes(searchKey)) ||
        (item.additionalStatus && item.additionalStatus.toLowerCase().includes(searchKey)) ||
        (item.timeStatus && item.timeStatus.toLowerCase().includes(searchKey)) ||
        (item.weightpercentage && item.weightpercentage.toLowerCase().includes(searchKey)) ||
        (item.volumevalue && item.volumevalue.toLowerCase().includes(searchKey)) ||
        (item.uldposition1 && item.uldposition1.toLowerCase().includes(searchKey)) ||
        (item.uldvalue1 && item.uldvalue1.toLowerCase().includes(searchKey)) ||
        (item.uldposition2 && item.uldposition2.toLowerCase().includes(searchKey)) ||
        (item.uldvalue2 && item.uldvalue2.toLowerCase().includes(searchKey)) ||
        (item.uldposition3 && item.uldposition3.toLowerCase().includes(searchKey)) ||
        (item.uldvalue3 && item.uldvalue3.toLowerCase().includes(searchKey)) ||
        (item.uldposition4 && item.uldposition4.toLowerCase().includes(searchKey)) ||
        (item.revenue && item.revenue.toLowerCase().includes(searchKey)) ||
        (item.yeild && item.yeild.toLowerCase().includes(searchKey)) ||
        (item.sr && item.sr.toLowerCase().includes(searchKey)) ||
        (item.queuedBookingSR && item.queuedBookingSR.toLowerCase().includes(searchKey)) ||
        (item.queuedBookingvolume && item.queuedBookingvolume.toLowerCase().includes(searchKey))
      );
    });
    if(!filteredRows.length){
      setLoad("false");
      setStatus("please enter a valid entry");
      setData(rows);
    }
    else{
    setData(filteredRows);
    setStatus("")
    }
  };
  if (data && data.length) {
    return (
      <Router>
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Redirect exact from="/" to="grid" />
              <Route exact path="/slick" component={Spreadsheet}></Route>
              <Route
                exact
                path="/grid"
                render={(props) => <Grid {...props} rows={data} handleChange={getSearchWord} status={status}/>}
              ></Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  } 
  else 
  return<LoadingSpinner/>
}
