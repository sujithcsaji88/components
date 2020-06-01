export const CustomFormatter = (row, cell, value, columnDef, dataContext) => {
  let val;
  switch (columnDef.name) {
    case "Flight No":
      val = value.flightno;
      break;
    case "Flight Date":
      val = value.date;
      break;
    case "Segment From":
      val = value.from;
      break;
    case "Segment To":
      val = value.to;
      break;
    case "Flight Model":
      val = value.flightModel;
      break;
    case "Body Type":
      val = value.bodyType;
      break;
    case "Type":
      val = value.type;
      break;
    case "Start Time":
      val = value.startTime;
      break;
    case "End Time":
      val = value.endTime;
      break;
    case "Status":
      val = value.status;
      break;
    case "Additional Status":
      val = value.additionalStatus;
      break;
    case "Time Status":
      val = value.timeStatus;
      break;
    case "Weight %":
      val = value.percentage;
      break;
    case "Weight Value":
      val = value.value;
      break;
    case "Volume %":
      val = value.percentage;
      break;
    case "Volume Value":
      val = value.value;
      break;
    case "Weight %":
      val = value.position;
      break;
    case "Weight Value":
      val = value.value;
      break;
    case "ULD Position1":
      val = value[0].position;
      break;
    case "ULD Value1":
      val = value[0].value;
      break;
    case "ULD Position2":
      val = value[1].position;
      break;
    case "ULD Value2":
      val = value[1].value;
      break;
    case "ULD Position3":
      val = value[2].position;
      break;
    case "ULD Value3":
      val = value[2].value;
      break;
    case "ULD Position4":
      val = value[3].position;
      break;
    case "ULD Value4":
      val = value[3].value;
      break;
    case "Revenue":
      val = value.revenue;
      break;
    case "Yeild":
      val = value.yeild;
      break;
    case "Booking SR":
      val = value.sr;
      break;
    case "Booking Volume":
      val = value.volume;
      break;
  }
  return val;
};
