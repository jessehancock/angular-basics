var app = require("../index.js");
var db = app.get('db');

module.exports = {
    getMessage: function(req, res, next){
      db.get_message(function(err, schedule){
        if(err) res.status(500).send(err);
        else res.status(200).json(schedule);
      });
    }

};
