DS.FixtureAdapter.reopen({
  find: function(store, type, id) {
    var fixtures = this.fixturesForType(type),
        fixture;

    Ember.assert("Unable to find fixtures for model type "+type.toString(), fixtures);

    if (fixtures) {
      if ($.inArray(type, [App.Merchandise, 'App.MixedPack', App.Wine, App.Winelist]) > -1) {
        fixture = Ember.A(fixtures).findProperty('anchor', id);
        if (!fixture) { fixture = Ember.A(fixtures).findProperty('id', id); }
      } else {
        fixture = Ember.A(fixtures).findProperty('id', id);
      }
    }

    if (fixture) {
      return this.simulateRemoteCall(function() {
        return fixture;
      }, this);
    }
  },
});
