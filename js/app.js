App = Ember.Application.create();

App.Router.reopen({
  location: 'hashbang',
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
