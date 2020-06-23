//This is the entry point of the web app
const express = require('express');
const fs = require('fs'); 
app = express();

  function sortDescending(prop){
    return function (a, b){
      if (a[prop] > b[prop]){
        return 1;
      }
      if (a[prop] < b[prop]){
        return -1;
    }
    return 0;

}
  }

function sortAscending(prop){
  return function (a, b){
    if (a[prop] > b[prop]){
      return 1;
    }
    if (a[prop] < b[prop]){
      return -1;
    }
  return 0;
}
}
let rawdataa = fs.readFileSync('./list.json');
  let dataa = JSON.parse(rawdataa);
  dataa.sort(sortDescending("points"));

  app.get('./list.json', (req, res) => {
    res.json(dataa);
  });
  console.log(dataa);

