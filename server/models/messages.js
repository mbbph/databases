var db = require('../db');



module.exports = {
  getAll: function (callback) {
    db.dbConnection.query('SELECT * FROM messages', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function (message, callback) {
    //var {room, username, messageText} = message;
    //db.dbConnection.query('INSERT INTO messages (room, username, messageText) \values (?, ?, ?)', [room, username, messageText], (err, data) => {
    let qry = `INSERT INTO messages (room, username, messageText) values ('${message.room}', '${message.username}', '${message.messageText}')`;

    db.dbConnection.query(qry, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};

//FROM
// var post  = {id: 1, title: 'Hello MySQL'};
// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
