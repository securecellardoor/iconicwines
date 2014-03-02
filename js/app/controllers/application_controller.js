App.ApplicationController = Ember.ObjectController.extend({
  prices: function () {
    return this.store.find('price');
  }.property(),

  winelists: function () {
    return this.store.find('winelist');
  }.property(),
});
