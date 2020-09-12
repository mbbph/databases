var RoomsView = {
  $show: $('#showrooms'),
  $button: $('#enterroom'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.filter);
    RoomsView.$show.on('click', RoomsView.showAll);
  },

  render: function() {
    var rooms = [];
    for (var i = 0; i < Messages.storage.length; i++) {
      rooms.push(Messages.storage[i].room);
    }

    var uniqueRooms = new Set(rooms);

    var html = '';
    uniqueRooms.forEach(function(room) {
      html += `<option value = "${room}">${room}</option>`;
    });
    $('#rooms select').append(html);
  },

  filter: function() {
    var currentRoom = $('#rooms select option:selected').val();
    $('.chat').addClass('hidden');
    $(`.${currentRoom.split(' ').join('')}`).removeClass('hidden');
  },

  showAll: function() {
    console.log('showAll called');
    $('.chat').removeClass('hidden');
  }


};