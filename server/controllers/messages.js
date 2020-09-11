var models = require('../models');

//const headers = require('../cors');
// var messages = require('../models/messages.js');


module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, data) {
      if (err) {
        throw new Error ('error in controllers/messages.get');
      } else {
        //res.set(headers);
        res.append('access-control-allow-origin', '*');
        res.append('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.append('access-control-allow-headers', 'content-type, accept');
        res.append('access-control-max-age', 10);
        res.json(data);
        res.end();
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('req.body is', req.body);
    var message = {
      username: req.body.username,
      messageText: req.body.messageText,
      room: req.body.room
    };

    models.messages.create(message, (err, data)=>{
      if (err) {
        throw new Error ('error in controllers/messages.post');
      } else {
        //res.send(data);
        console.log('message posted!');
        //res.set(headers);
        res.append('access-control-allow-origin', ['*']);
        res.append('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.append('access-control-allow-headers', 'content-type, accept');
        res.append('access-control-max-age', 10);
        res.end();


      }
    });

  } // a function which handles posting a message to the database
};
