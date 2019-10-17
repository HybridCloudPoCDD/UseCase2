require("appdynamics").profile({
 controllerHostName: 'molhungary.saas.appdynamics.com',
 controllerPort: 443,
 
 // If SSL, be sure to enable the next line
 controllerSslEnabled: true,
 accountName: 'molhungary',
 accountAccessKey: 'h3twuv1oqm8p',
 applicationName: 'Tasks',
 tierName: process.env.HOSTNAME || 'deftier',
 nodeName: 'process' // The controller will automatically append the node name with a unique number
});

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'molcloudpoc.mysql.database.azure.com',
    user: 'hpadmin@molcloudpoc',
    password: 'HPinvent123.',
    database: 'mydb'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
