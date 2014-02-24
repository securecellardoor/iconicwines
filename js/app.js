App = Ember.Application.create({
  LOG_TRANSITIONS: true,

  rootElement: '#iconicwines',
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
  simulateRemoteResponse: true,
  latency: 0,
});

App.ApplicationView = Ember.View.extend({
  classNames: ['iconic-container'],
});
