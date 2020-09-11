var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // maybe similar to this: FormView.$form.on('submit', FormView.handleSubmit);

  },

  render: function() {
    var html = '';
    for (var i = 0; i < Messages.storage.length; i++) {
      html += MessageView.render(Messages.storage[i]);
    }
    $('#chats').append(html);
  }
};


