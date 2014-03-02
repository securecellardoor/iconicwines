App = Ember.Application.create({
  LOG_TRANSITIONS: true,

  rootElement: '#iconicwines',
});

production = false;
// production = true;
if (production) {

  App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    host: 'http://m.securecellardoor.dev:3000',
    namespace: 'api/v1/wattlefarm',
  });

} else {

  App.ApplicationAdapter = DS.FixtureAdapter.extend({
    simulateRemoteResponse: true,
    latency: 0,
  });

}

App.ApplicationView = Ember.View.extend({
  classNames: ['iconic-container'],
});

App.prices = function () {
    console.log('fucks1')
    return this.store.find('price');
  };
