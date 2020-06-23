//This is the entry point of the web app
const express = require('express');
app = express();

let dataa = [
          {fullname: "Buba Mohammed", SlackUsername: "@Mohammed", Track: "Backend", Email: "juniorbuba4real@gmail.com", points: 2},
          {fullname: "Joseph Godwin", SlackUsername: "@Joebrown", Track: "Backend", Email: "shoo_shoo@gmail.com", points: 3},
          {fullname: "Alabi Markaz", SlackUsername: "@Morkaz", Track: "Design", Email: "morkaz_alabi@yahoo.com", points: 1},
          {fullname: "Cookie Brown", SlackUsername: "@cookie", Track: "Backend", Email: "cookie@gmail.com", points: 5},
          {fullname: "Eric Jon", SlackUsername: "@eric", Track: "Backend",Email: "ericson@gmail.com", points: 6},
          {fullname: "Jon Snow", SlackUsername: "@jonSnow", Track: "Backend",Email: "juniorbuba4real@gmail.com", points: 2}];

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

  dataa.sort(sortDescending("points"));
  console.log(dataa);

