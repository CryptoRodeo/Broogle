let express     = require('express'),
ejs             = require('ejs');
app             = express();


//For CORS
//CORS middleware
var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'api.openbrewerydb.org'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
    next();
}

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express); //<-- requires EJS, removes Heroku error.


//Routes to pages
var indexRoute = require('./routes/index');

app.use(express.static(__dirname + "/public/"));
app.use(corsMiddleware);


/**
 * Modularized the routes.
 * 
 * Now instead of having to declare the routes and all their functionality here,
 * app.use() allows us to declare all that functionality in another file
 * which will be used once the respective route is requested.
 * 
 * Example: All the functionality needed for the index route '/' is in a separate file in a seperate
 * folder.
 * 
 * Also, all the routes' respective files will have their own declared routes that are relative to
 * the current route.
 * 
 * For example, the "/" route in the restaurants.js file is the "/restaurant" route.
 * 
 * Think of it as "/restaurants" being prefixed to the "/new" route in the restaurants.js
 * file.
 */

app.use("/", indexRoute);

//Go to port 3000 or the port set by heroku dynamically
app.listen(process.env.PORT || 3000, function(){
    console.log("Broogle is up and running");
});
app.listen(process.env.PORT || 8000, function(){
    console.log("App is running");
});
