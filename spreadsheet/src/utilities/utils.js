export const requiredFieldValidator = (value) => {
  if (value === null || value === undefined || !value.length) {
    return { valid: false, msg: "This is a required field" };
  } else {
    return { valid: true, msg: null };
  }
};

export const basicCalculation = (cal, val1, val2) => {
  let val;
  switch (cal) {
    case "=SUM":
    case "=ADD":
    case "=sum":
    case "=add":
      val = Number(val1) + Number(val2);
      break;
    case "=MUL":
    case "=mul":
      val = Number(val1) * Number(val2);
      break;
    case "=SUB":
    case "=sub":
      val = Number(val1) - Number(val2);
      break;
    case "=AVG":
    case "=avg":
      val = Number(val1) + Number(val2) / 2;
      break;
    case "=Min":
    case "=MIN":
      val = Math.min(...Number(val1, val2));
      break;
    case "=Max":
    case "=MAX":
      val = Math.min(...Number(val1, val2));
  }
  return val;
};
