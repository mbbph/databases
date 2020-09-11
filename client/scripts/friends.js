var Friends = {
  friendList: {

  },

  render: function() {
    $('.username').on('click', function(event) {
      var newFriend = String(event.currentTarget.innerText).split(' ').join('');

      if (Friends.friendList[newFriend] === true) {
        $(`.${newFriend}`).removeClass('friend');
        delete Friends.friendList[newFriend];
      } else {
        $(`.${newFriend}`).addClass('friend');
        Friends.friendList[newFriend] = true;
      }
    });
  }

};

