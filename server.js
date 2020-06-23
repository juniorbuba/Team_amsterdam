require('dotenv').config({ path: 'variables.env' });
const express = require('express');    
const app = express();
//const list = require('./list.json');
//const scoreBoard = require('./scoreBoard');
const webRoutes = require("./routes/web");
app.use("/", webRoutes);


app.set('port', process.env.PORT || 4000);
const server = app.listen(app.get('port'), () => {
console.log(`Testing server → PORT ${server.address().port}`);
});
