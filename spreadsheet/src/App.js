
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

  const maxLeftPinnedColumn = 5;
  //Configure columns and its related featues such as editor(Text/DropDown), FormulaApplicable(True/False)
  //Editable, Draggable, sortable, resizable, filterable, default width
  const columns = [
    {
      key: "flightno",
      name: "Flight #",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "date",
      name: "Date",
      draggable: true,
      editor: "DatePicker",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "segmentfrom",
      name: "Segment From",
      draggable: true,
      editor: "DropDown",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "revenue",
      name: "Revenue",
      draggable: true,
      editor: "Text",
      formulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "yeild",
      name: "Yeild",
      draggable: true,
      editor: "Text",
      formulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "segmentto",
      name: "Segment To",
      draggable: true,
      editor: "DropDown",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "flightModel",
      name: "Flight Model",
      //draggable: true,
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "bodyType",
      name: "Body Type",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "type",
      name: "Type",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "startTime",
      name: "Start Time",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "endTime",
      name: "End Time",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "status",
      name: "Status",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "additionalStatus",
      name: "Additional Status",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "timeStatus",
      name: "Time Status",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "weightpercentage",
      name: "Weight Percentage",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "weightvalue",
      name: "Weight Value",
      draggable: true,
      editor: "Text",
      formulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "volumepercentage",
      name: "Volume Percentage",
      draggable: true,
      editor: "Text",
      formulaApplicable: true,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "volumevalue",
      name: "Volume Value",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition1",
      name: "uldposition1",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue1",
      name: "uldvalue1",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition2",
      name: "uldposition2",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue2",
      name: "uldvalue2",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition3",
      name: "uldposition3",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue3",
      name: "uldvalue3",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldposition4",
      name: "uldposition4",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "uldvalue4",
      name: "uldvalue4",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },

    {
      key: "sr",
      name: "SR",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "queuedBookingSR",
      name: "Queued Booking SR",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
    {
      key: "queuedBookingvolume",
      name: "Queued Booking Volume",
      draggable: true,
      editor: "Text",
      formulaApplicable: false,
      sortable: true,
      resizable: true,
      filterable: true,
      width: 120,
    },
  ];

  //Configure columns and its related functions
  const airportCodeList =  [
        "AAA",
        "AAB",
        "AAC",
        "ABA",
        "ABB",
        "ABC",
        "ACA",
        "ACB",
        "ACC",
        "BAA",
        "BAB",
        "BAC",
        "BBA",
        "BBB",
        "BBC",
        "BCA",
        "BCB",
        "BCC",
        "CAA",
        "CAB",
        "CAC",
        "CBA",
        "CBB",
        "CBC",
        "CCA",
        "CCB",
        "CCC",
        "XXX",
        "XXY",
        "XXZ",
        "XYX",
        "XYY",
        "XYZ",
        "XZX",
        "XZY",
        "XZZ",
        "YXX",
        "YXY",
        "YXZ",
        "YYX",
        "YYY",
        "YYZ",
        "YZX",
        "YZY",
        "YZZ",
        "ZXX",
        "ZXY",
        "ZXZ",
        "ZYX",
        "ZYY",
        "ZYZ",
        "ZZX",
        "ZZY",
        "ZZZ"
    ];

  //Add logic for doing global search in the spreadsheet
  const globalSearchLogic = (e, updatedRows) => {
    searchKey = String(e.target.value).toLowerCase();
    let filteredRows = updatedRows.filter((item) => {
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
          (item.weightvalue && item.weightvalue.toLowerCase().includes(searchKey)) ||
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
const handleWarningStatus=()=>{
  setStatus("invalid");
}
  //Gets called when there is a cell edit
  const updateCellData = (fromRow,toRow,value,updateType) => {
    if(updateType==="CELL_UPDATE"){
      console.log("row:", fromRow, "updated-Value:", value,"Updation-Type:", updateType);
    }
    if(updateType==="CELL_DRAG"){
      console.log("fromRow:", fromRow,"toRow:",toRow, "updated-Value:", value,"Updation-Type:", updateType);
    }
  }

  //Gets called when row bulk edit is done
  const selectBulkData = (selectedRows) => {
    console.log("selectedRows:", selectedRows);
  };
  const closeWarningStatus = () => {
    setStatus("")
  }
  useEffect(() => {
    //Make API call to fetch initial set of data, uncomment below code to use API call
    // fetchData(0).then((data) => {
    //   setItems(data);
    // });
    setData(rows);
  }, [rows]);

  if (data && data.length) {
    return (
      <div>
        <SpreadSheet
          rows={data}
          textValue={searchKey}
          globalSearchLogic={globalSearchLogic}
          status={status}
          closeWarningStatus={closeWarningStatus}
          handleWarningStatus={handleWarningStatus}
          count={data.length}
          columns={columns}
          airportCodes={airportCodeList}
          gridHeight={gridHeight}
          updateCellData={updateCellData}
          selectBulkData={selectBulkData}
          maxLeftPinnedColumn={maxLeftPinnedColumn}
        />
      </div>
    );
  } else return <h2>Loading Data</h2>;
};

export default App;
