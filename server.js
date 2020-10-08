const MongoClient = require("mongodb").MongoClient;
const express = require("express");
// create an ejs instance
const ejs = require("ejs"); 
const app = express();



app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');  

app.get('/',function(req,res){
    res.render('index', {title:"Citadels - main"});
})

app.get('/lobby',function(req,res){
    res.render('lobby', {title:"Citadels - Lobby"});
})

app.get('/PlayerRoom',function(req,res){
    res.render('fourPlayerRoom', {title:"Citadels - Game Room"});
})

app.listen(3000);
console.log("Server running at Port: 3000");
