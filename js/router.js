App.Router.reopen({
  location: 'hashbang',
});

App.Router.map(function() {
  var scrollPosition = 0;

  this.resource('cart', { path: '/cart' });

  this.resource('merchandise', { path: '/merchandise/:anchor' });
  this.resource('mixed-pack', { path: '/mixed-packs/:anchor' });
  this.resource('wine', { path: '/wines/:anchor' });

  this.resource('winelist', { path: '/' });
  this.resource('winelist', { path: '/:anchor' });
});

Ember.Route.reopen({
  activate: function() {
    window.scrollTo(0, 0);
  }
});

App.MerchandiseRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('merchandise', { anchor: params.anchor }).then(function(array) {
      return array.get('firstObject');
    });
  },
});

App.MixedPackRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('mixedPack', { anchor: params.anchor }).then(function(array) {
      return array.get('firstObject');
    });
  },
});

App.WinelistRoute = Ember.Route.extend({
  activate: function() {
    setTimeout(function () { $(document).scrollTop(Ember.Route.scrollPosition); }, 0);
  },
  deactivate: function() {
    Ember.Route.scrollPosition = $(document).scrollTop();
  },
  model: function(params) {
    var options = {}
    if (params.anchor) { options = { anchor: params.anchor } }
    return this.store.find('winelist', options).then(function(array) {
      return array.get('firstObject');
    });
  },
});

App.WineRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('wine', { anchor: params.anchor }).then(function(array) {
      return array.get('firstObject');
    });
  },
});
