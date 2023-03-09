const express = require("express");
const path = require("path");
//const a = require('./assets/js/Controllers');

const app = express();
const HTTP_PORT = process.env.PORT || 8080
app.use(express.static(__dirname+'/assets'));
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs");

function onHttpStart(){
    console.log("Server started, listening on " + HTTP_PORT); 
}

// Main Pages

app.get("/",function(req,res) {
    res.render("Main/Home.html");
})

app.listen(HTTP_PORT,onHttpStart);