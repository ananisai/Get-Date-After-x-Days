const addDays = require("date-fns/addDays");
const get = function Find(x) {
  const num = addDays(new Date(2020, 7, 22), x);
  return `${num.getDate()}-${num.getMonth() + 1}-${num.getFullYear()}`;
};
module.exports = get;
