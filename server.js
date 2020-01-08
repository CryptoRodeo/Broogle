var express     = require('express'),
app             = express(),
methodOverride = require("method-override"),
bodyParser      = require("body-parser"),
ejs 			= require('ejs');

//MongoDB data models
// Tells express to use the method-override package and what to look for in the URL
app.use(methodOverride("_method"));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express); //<-- requires EJS, removes Heroku error.


//Routes to pages
var indexRoute = require('./routes/index');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


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
