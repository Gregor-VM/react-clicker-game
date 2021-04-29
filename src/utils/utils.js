const numberFormat = (num) => {
  if (isNaN(num)) {
    return "!NaN";
  }
  return num
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=d*,?)(\d{3})/g, "$1,")
    .split("")
    .reverse()
    .join("")
    .replace(/^[,]/, "");
};

const utils = { numberFormat };

export default utils;
