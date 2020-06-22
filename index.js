//This is the entry point of the web app
var express = require('express');

  app = express();

  const fs = require('fs');

  fs.readFile('list.json', (err, data) => {
    if (err) throw err;
    let rawdata = JSON.parse(data);
    console.log(rawdata);
});
