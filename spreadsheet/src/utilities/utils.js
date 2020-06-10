export const requiredFieldValidator = (value) => {
  if (value === null || value === undefined || !value.length) {
    return { valid: false, msg: "This is a required field" };
  } else {
    return { valid: true, msg: null };
  }
};

const col = [
  "yield",
  "revenue",
  "weightpercentage",
  "weightvalue",
  "volumepercentage",
  "volumevalue",
  "queuedBookingvolume",
];

export const applyFormula = (obj) => {
  if (obj !== null || obj !== undefined) {
    if(obj.yeild !== null){
      obj.yeild = getResult(obj.yeild.toString());
    }
    else if(obj.revenue !== null){
      obj.revenue = getResult(obj.revenue.toString());
    }
    else if(obj.weightpercentage !== null){
      obj.weightpercentage = getResult(obj.weightpercentage.toString());
    }
    else if(obj.weightvalue !== null){
      obj.weightvalue = getResult(obj.weightvalue.toString());
    }
  }
  return obj;
};

const getResult = (item) => {
  let result = item;
  if ( item && item.charAt(0) === "=") {
    var operation = item.split("(");
    var value = operation[1].substring(0, operation[1].length - 1).split(/[,:]/);
    switch (operation[0]) {
      case "=SUM":
      case "=ADD":
      case "=sum":
      case "=add":
        result = value.reduce(function(a, b){ return Number(a) + Number(b); });
        break;
      case "=MUL":
      case "=mul":
        result = value.reduce(function(a, b){ return Number(a) * Number(b); });
        break;
      case "=SUB":
      case "=sub":
      case "=DIFF":
      case "=diff":
        result = value.reduce(function(a, b){ return Number(a) - Number(b); });
        break;
      case "=min":
      case "=MIN":
        result = Math.min.apply( Math, value );
        break;
      case "=max":
      case "=MAX":
        result = Math.max.apply( Math, value );
        break;
    }
  }
  return result;
};