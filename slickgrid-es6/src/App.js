import React, { useState, useEffect } from "react";
import Spreadsheet from "./components/slickgrid/slickgrid";
import CargoData from "./stubs/CargoData.json";
import LoadingSpinner from "./components/common/LoadingSpinner";
let searchKey;
export default function App() {
  const [data, setData] = useState();
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
  
  
  if (data && data.length) {
    return (
        <div>
              <Spreadsheet/>
        </div>
    );
  } 
  else 
  return<LoadingSpinner/>
}
