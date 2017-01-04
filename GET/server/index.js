//Basic Start
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var massive = require('massive');
var connectionString = 'postgres://postgres@localhost/message';

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));


var massiveInstance = massive.connectSync({
  connectionString: connectionString
});

app.set('db', massiveInstance);
var db = app.get('db');


//GET ENDPOINTS
//get all products
// app.get('/getMessage', function(req, res, next){
//   db.get_message(function(err, response){
//     res.status(200).json(response);
//   });
// });



// Declaring VARIABLE to find
var read = require('./controller/read');

//
// //GET ENDPOINTS
app.get('/getMessage', read.getMessage);


var port = 3000;
app.listen(port, function(){
  console.log('listening on port ' + port);
});
