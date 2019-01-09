module.exports = (dir) => {
  var res;
  if(!dir) {
    throw Error('Directory not found!')
  } else {
    res = require("ezpzdb/main.js")(dir)
  }
  return res
}