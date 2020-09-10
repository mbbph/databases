var db = require('../db');

// module.exports = {
//   getAll: function (callback) {
//     db.dbConnection.query('SELECT * FROM messages', (err, data) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, data);
//       }
//     });
//   }, // a function which produces all the messages
//   create: function (message, callback) {
//     var {id, room, username, messageText, createdAt} = message;
//     db.dbConnection.query('INSERT INTO messages (id, room, username, messageText, createdAt) values (id, room, username, messageText, createdAt)', (err, data) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, data);
//       }
//     });
//   } // a function which can be used to insert a message into the database
// };
