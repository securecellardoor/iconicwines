App.ApplicationController = Ember.ObjectController.extend({
  winelists: function () {
    return this.store.find('winelist');
  }.property(),
});
