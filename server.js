var express = require('express');
var componentRoutes = require('./dist/client');
var dbRoutes = require('./src/server/routes');
var app = express();
dbRoutes(app);
componentRoutes(app);
app.listen(8080,()=>{console.log("server started")});