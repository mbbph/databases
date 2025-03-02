var MessageView = {

  render: function(obj) {
    console.log(String(MessageView.escape(obj.room)).split(' ').join(''));
    return `
    <div class = "${String(MessageView.escape(obj.room)).split(' ').join('')} chat">
        <div class="username"><p>${MessageView.escape(obj.username)}</p></div>
        <div class = "${String(MessageView.escape(obj.username)).split(' ').join('')}"><p>${MessageView.escape(obj.messageText)}</p></div>
        <div><p>${MessageView.escape(obj.room)}</p></div>
    </div>`;

  },


  escape: function(string) {
    if (string === undefined || string === null) {
      return string;
    }
    var escapedString = '';
    for (var i = 0; i < string.length; i++) {
      var char;
      if(string[i] === '<') {
        char = '&lt;';
      } else if (string[i] === '>') {
        char = '&gt;';
      } else {
        char = string[i];
      }
      escapedString += char;
    }
    return escapedString;
  }



};