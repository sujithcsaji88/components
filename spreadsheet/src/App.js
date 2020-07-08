import React, { useState, useEffect } from "react";
import SpreadSheet from "./components/SpreadSheet";
import CargoData from "./data.json";
import { fetchData } from "./getData";

const App = () => {
  //Get spreadsheet height value, which is a required value
  const gridHeight = "90vh";

  let searchKey = "";
  //Set state value for variable to hold grid data
  const [data, setData] = useState();
  //Set state value for variable to hold grid record status
  const [status, setStatus] = useState("");
  const rows = CargoData;

  //Configure columns and its related featues such as editor(Text/DropDown), FormulaApplicable(True/False)
  //Editable, Draggable, sortable, resizable, filterable, default width
  const columns = [
    {
      key: "flightno",
      name: "Flight #",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "date",
      name: "Date",
      editable: true,
      draggable: true,
      editor: "DatePicker",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "segmentfrom",
      name: "Segment From",
      editable: true,
      draggable: true,
      editor: "DropDown",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "revenue",
      name: "Revenue",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "yeild",
      name: "Yeild",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "segmentto",
      name: "Segment To",
      editable: true,
      draggable: true,
      editor: "DropDown",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "flightModel",
      name: "Flight Model",
      editable: false,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "bodyType",
      name: "Body Type",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "type",
      name: "Type",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "startTime",
      name: "Start Time",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "endTime",
      name: "End Time",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "status",
      name: "Status",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "additionalStatus",
      name: "Additional Status",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "timeStatus",
      name: "Time Status",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "weightpercentage",
      name: "Weight Percentage",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "weightvalue",
      name: "Weight Value",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "volumepercentage",
      name: "Volume Percentage",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "volumevalue",
      name: "Volume Value",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition1",
      name: "uldposition1",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue1",
      name: "uldvalue1",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition2",
      name: "uldposition2",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue2",
      name: "uldvalue2",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition3",
      name: "uldposition3",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue3",
      name: "uldvalue3",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition4",
      name: "uldposition4",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue4",
      name: "uldvalue4",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },

    {
      key: "sr",
      name: "SR",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "queuedBookingSR",
      name: "Queued Booking SR",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "queuedBookingvolume",
      name: "Queued Booking Volume",
      editable: true,
      draggable: true,
      editor: "Text",
      formaulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
  ];

  //Configure columns and its related functions
  const airportCodes = [
    { id: "AAA", value: "AAA" },
    { id: "AAB", value: "AAB" },
    { id: "AAC", value: "AAC" },
    { id: "ABA", value: "ABA" },
    { id: "ABB", value: "ABB" },
    { id: "ABC", value: "ABC" },
    { id: "ACA", value: "ACA" },
    { id: "ACB", value: "ACB" },
    { id: "ACC", value: "ACC" },
    { id: "BAA", value: "BAA" },
    { id: "BAB", value: "BAB" },
    { id: "BAC", value: "BAC" },
    { id: "BBA", value: "BBA" },
    { id: "BBB", value: "BBB" },
    { id: "BBC", value: "BBC" },
    { id: "BCA", value: "BCA" },
    { id: "BCB", value: "BCB" },
    { id: "BCC", value: "BCC" },
    { id: "CAA", value: "CAA" },
    { id: "CAB", value: "CAB" },
    { id: "CAC", value: "CAC" },
    { id: "CBA", value: "CBA" },
    { id: "CBB", value: "CBB" },
    { id: "CBC", value: "CBC" },
    { id: "CCA", value: "CCA" },
    { id: "CCB", value: "CCB" },
    { id: "CCC", value: "CCC" },
    { id: "XXX", value: "XXX" },
    { id: "XXY", value: "XXY" },
    { id: "XXZ", value: "XXZ" },
    { id: "XYX", value: "XYX" },
    { id: "XYY", value: "XYY" },
    { id: "XYZ", value: "XYZ" },
    { id: "XZX", value: "XZX" },
    { id: "XZY", value: "XZY" },
    { id: "XZZ", value: "XZZ" },
    { id: "YXX", value: "YXX" },
    { id: "YXY", value: "YXY" },
    { id: "YXZ", value: "YXZ" },
    { id: "YYX", value: "YYX" },
    { id: "YYY", value: "YYY" },
    { id: "YYZ", value: "YYZ" },
    { id: "YZX", value: "YZX" },
    { id: "YZY", value: "YZY" },
    { id: "YZZ", value: "YZZ" },
    { id: "ZXX", value: "ZXX" },
    { id: "ZXY", value: "ZXY" },
    { id: "ZXZ", value: "ZXZ" },
    { id: "ZYX", value: "ZYX" },
    { id: "ZYY", value: "ZYY" },
    { id: "ZYZ", value: "ZYZ" },
    { id: "ZZX", value: "ZZX" },
    { id: "ZZY", value: "ZZY" },
    { id: "ZZZ", value: "ZZZ" },
  ];

  //Add logic for doing global search in the spreadsheet
  const globalSearchLogic = (e) => {
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

  //Gets called when there is a cell edit
  const updateCellData = (rowIndex) => {
    console.log(rowIndex);
  };

  //Gets called when row bulk edit is done
  const selectBulkData = (selectedRows) => {
    console.log(selectedRows);
  };

  useEffect(() => {
    //Make API call to fetch initial set of data, uncomment below code to use API call
    // fetchData(0).then((data) => {
    //   setItems(data);
    // });
    setData(rows);
  }, []);

  if (data && data.length) {
    return (
      <div>
        <SpreadSheet
          rows={data}
          textValue={searchKey}
          globalSearchLogic={globalSearchLogic}
          status={status}
          count={data.length}
          columns={columns}
          airportCodes={airportCodes}
          gridHeight={gridHeight}
          updateCellData={updateCellData}
          selectBulkData={selectBulkData}
        />
      </div>
    );
  } else return <h2>Loading Data</h2>;
};

export default App;
