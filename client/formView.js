var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // console.log('this is event:', event)
    event.preventDefault(); // ask what is happening
    var selectedRoom;
    if ($('#newRoomName').val() !== '') {
      selectedRoom = $('#newRoomName').val();
    } else {
      selectedRoom = $('#rooms select option:selected').val();
    }

    var messageObj = {
      username: App.username,
      text: event.currentTarget['0'].value,
      roomname: selectedRoom
    };

    Parse.create(messageObj);
    console.log(App.initialize);
    setTimeout(function() { location.reload(); }, 500);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};