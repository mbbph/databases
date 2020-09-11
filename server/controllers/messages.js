var models = require('../models');
// var messages = require('../models/messages.js');


module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, data) {
      if (err) {
        throw new Error ('error in controllers/messages.get');
      } else {
        res.json(data);
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
        res.end();

      }
    });

  } // a function which handles posting a message to the database
};
