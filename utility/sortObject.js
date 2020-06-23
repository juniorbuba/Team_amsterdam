
Object.defineProperty(exports, "__esModule", { value: true });

exports.unauthorizedResponse = function (res, msg) {
  var data = {
    status: 0,
    message: msg,
  };
  return res.status(401).json(data);
};
//# sourceMappingURL=apiResponse.js.map

exports.sortDescending = function(prop){
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return -1;
    }
    if (a[prop] < b[prop]) {
      return 1;
    }

    return 0;
  }
}

exports.sortAscending = function(prop){
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    }
    if (a[prop] < b[prop]) {
      return -1;
    }

    return 0;
  }
}