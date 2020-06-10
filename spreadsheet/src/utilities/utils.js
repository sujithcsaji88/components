export const requiredFieldValidator = (value) => {
  if (value === null || value === undefined || !value.length) {
    return { valid: false, msg: "This is a required field" };
  } else {
    return { valid: true, msg: null };
  }
};

export const applyFormula = (obj) => {
  let result;
  const col = [
    "yield",
    "revenue",
    "weightpercentage",
    "weightvalue",
    "volumepercentage",
    "volumevalue",
    "queuedBookingvolume",
  ];

  if (obj != null || obj != undefined) { 
    var item = obj.yeild.toString();
    if ( item && item.charAt(0) === "=") {
      var operation = obj.yeild.split("(");
      var value = operation[1].substring(0, operation[1].length - 1).split(/[,:+]/);
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
      obj.yeild = result;
    }
  }
  return obj;
};
