var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    $('#refresh').on('click', function() {
      location.reload();
    });    //setInterval(function() { location.reload(); }, 10000);



  },

  fetch: function(callback = ()=>{}) {
    console.log('fetch was called');
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.storage = data.results;
      console.log(Messages.storage);
      MessagesView.render();
      RoomsView.render();
      Friends.render();
      callback();
    });
  },

  //
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
