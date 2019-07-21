var express = require('express');
const path = require('path');
var componentRoutes = require('./dist/serverComponents');
var dbRoutes = require('./src/server/routes');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'dist/public')));

dbRoutes(app);
componentRoutes(app);
app.listen(8080, () => { console.log("server started") });