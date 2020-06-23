require('dotenv').config({ path: 'variables.env' });
const express = require('express');    
const app = express();

app.set('port', process.env.PORT || 4000);
const server = app.listen(app.get('port'), () => {
console.log(`Testing server → PORT ${server.address().port}`);
});