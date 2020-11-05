const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();

});

app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get('/', (req, res) => { res.send("Hello World"); });
// Require advertisements routesconst advertisements
advertisementsRoutes = require('./src/routes/advertisement.route');
applyRoutes = require('./src/routes/apply.route');
// using as middleware
app.use('/api/v1/advertisements', advertisementsRoutes);
app.use('/api/v1/apply', applyRoutes);
// listen for requests
app.listen(port, () => { console.log(`Server is listening on port ${port}`); });