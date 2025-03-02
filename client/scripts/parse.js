var Parse = {

  //server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
  //server: 'http://127.0.0.1:3000/classes/messages',
  server: 'http://127.0.0.1:3000/classes/messages',

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      //mode: 'cors', ///just a test
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      //mode: 'cors', ///just a test

      // data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};