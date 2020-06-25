import React, { useState, useEffect } from "react";
import Grid from "./datagrid";
import CargoData from "../../stubs/CargoData.json";
import { BrowserRouter as Router } from "react-router-dom";

let searchKey;
export default function SpreadSheet(props) {
  const [data, setData] = useState();
  const [status, setStatus] = useState("");
  const rows = CargoData.map((CargoData) => {
    return {
      key: CargoData.travelId,
      travelId: CargoData.travelId,
      flightno: CargoData.flightno,
      date: CargoData.date,
      departureAirport: CargoData.DepartureAirport,
      arrivalAirport: CargoData.ArrivalAirport,
      revenue: CargoData.Revenue,
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
      yeild: CargoData.yeild,
      sr: CargoData.sr,
      queuedBookingSR: CargoData.queuedBookingSR,
      queuedBookingvolume: CargoData.queuedBookingvolume,
    };
  });

  useEffect(() => {
    setData(rows);
    let filteredRows;

    let searchKeys = [];
    if (props.filterArray !== undefined) {
      props.filterArray.applyFilter.map((item) => {
        const types = item.types;
        const field = item.field;
        if (types) {
          types.map((types) => {
            searchKeys.push({
              columnName: item.column,
              name: types.column,
              value: types.value,
            });
          });
        } else if (field) {
          field.map((field) => {
            searchKeys.push({
              columnName: item.column,
              name: field.column,
              value: field.value,
            });
          });
        } else {
          searchKeys.push({
            columnName: item.column,
            name: item.column,
            value: item.value,
            condition: item.condition,
          });
        }
      });
    }

    filteredRows = rows;
    searchKeys.map((obj) => {
      const columnName = obj.columnName;
      const searchKey = obj.value;
      const revenueCondition=obj.condition;
      filteredRows = filteredRows.filter((item) => {
        switch (columnName) {
          case "Departure Port":
            return (
              item.departureAirport &&
              item.departureAirport.toLowerCase().includes(searchKey.toLowerCase())
            );
            break;
          case "Arrival Port":
            return (
              item.arrivalAirport &&
              item.arrivalAirport.toLowerCase().includes(searchKey.toLowerCase())
            );
            break;
          case "Date":
            return item.date && item.date.toLowerCase().includes(searchKey);
            break;
          case "Revenue":
            
            if (revenueCondition=== "equals") {
              return (
                String(item.revenue) === searchKey
              );
            }
            else if(revenueCondition==="not equals to")
            {
              return (
                String(item.revenue) !== (searchKey)
              );
            }
            else if(revenueCondition==="less than")
            {
              return (
                String(item.revenue) < searchKey
              );
            }
            else if(revenueCondition==="greater than")
            {
              return (
                String(item.revenue) > searchKey
              );
            }
            else if(revenueCondition==="less or equal"){
              return (
                String(item.revenue) <= searchKey
              );
            }
            else if(revenueCondition==="greater or equal")
            {
              return (
                String(item.revenue) >= searchKey
              );
            }
            else if(revenueCondition==="does not match")
            {
              return (
                String(item.revenue) != searchKey
              );
            }
            else if(revenueCondition==="contains")
            {
              return (
                String(item.revenue).includes(searchKey)
              );
            }
            else {
              return (
                String(item.revenue).includes(searchKey)
              );
            }

            break;
          default:
        }
      });
      setData(filteredRows);
    });
  }, [props]);

  const getSearchWord = (e) => {
    searchKey = String(e.target.value).toLowerCase();
    let filteredRows = rows.filter((item) => {
      return (
        (item.flightno && item.flightno.toLowerCase().includes(searchKey)) ||
        (item.date && item.date.toLowerCase().includes(searchKey)) ||
        (item.segmentfrom &&
          item.segmentfrom.toLowerCase().includes(searchKey)) ||
        (item.segmentto && item.segmentto.toLowerCase().includes(searchKey)) ||
        String(item.flightModel).includes(searchKey) ||
        (item.bodyType && item.bodyType.toLowerCase().includes(searchKey)) ||
        (item.type && item.type.toLowerCase().includes(searchKey)) ||
        (item.startTime && item.startTime.toLowerCase().includes(searchKey)) ||
        (item.endTime && item.endTime.toLowerCase().includes(searchKey)) ||
        (item.status && item.status.toLowerCase().includes(searchKey)) ||
        (item.additionalStatus &&
          item.additionalStatus.toLowerCase().includes(searchKey)) ||
        (item.timeStatus &&
          item.timeStatus.toLowerCase().includes(searchKey)) ||
        (item.weightpercentage &&
          item.weightpercentage.toLowerCase().includes(searchKey)) ||
        (item.volumevalue &&
          item.volumevalue.toLowerCase().includes(searchKey)) ||
        (item.uldposition1 &&
          item.uldposition1.toLowerCase().includes(searchKey)) ||
        (item.uldvalue1 && item.uldvalue1.toLowerCase().includes(searchKey)) ||
        (item.uldposition2 &&
          item.uldposition2.toLowerCase().includes(searchKey)) ||
        (item.uldvalue2 && item.uldvalue2.toLowerCase().includes(searchKey)) ||
        (item.uldposition3 &&
          item.uldposition3.toLowerCase().includes(searchKey)) ||
        (item.uldvalue3 && item.uldvalue3.toLowerCase().includes(searchKey)) ||
        (item.uldposition4 &&
          item.uldposition4.toLowerCase().includes(searchKey)) ||
        (item.revenue && item.revenue.toLowerCase().includes(searchKey)) ||
        (item.yeild && item.yeild.toLowerCase().includes(searchKey)) ||
        (item.sr && item.sr.toLowerCase().includes(searchKey)) ||
        (item.queuedBookingSR &&
          item.queuedBookingSR.toLowerCase().includes(searchKey)) ||
        (item.queuedBookingvolume &&
          item.queuedBookingvolume.toLowerCase().includes(searchKey))
      );
    });
    if (!filteredRows.length) {
      setStatus("invalid");
      setData(rows);
    } else {
      setData(filteredRows);
      setStatus("");
    }
  };

  if (data && data.length) {
    return (
      <Router>
        <div>
          <Grid
            rows={data}
            textValue={searchKey}
            handleChange={getSearchWord}
            status={status}
            count={data.length}
          />
        </div>
      </Router>
    );
  } else return "";
}
