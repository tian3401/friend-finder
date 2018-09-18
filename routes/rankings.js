//Dependencies
var express= require('express');
var router= express.Router();
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app= express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var path = require("path");

app.use(express.static("public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    
    // Your port; if not 3306
    port: 3306,
    
    // Your username
    user: process.env.DB_USER,
    
    // Your password
    password: process.env.DB_PASSWORD,  //placeholder for your own mySQL password that you store in your own .env file
    database: process.env.DB_NAME    //TBD
  });

//Routes
router.get('/rankings', function(req,res){
   
    connection.query('SELECT * FROM users;', function(error, results, fields){
        if(error) throw error;

        res.json(results); 
        console.log('rankings array is displaying');
    });
}); 

router.get('/info', function(req,res){
    res.send(req.session);
}); 



module.exports= router; 