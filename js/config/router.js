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
    return this.store.find('merchandise', params.anchor || '');
  },
});

App.MixedPackRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('mixedPack', params.anchor || '');
  },
});

App.PricesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('price');
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
    if (params.anchor) {
      return this.store.find('winelist', params.anchor);
    } else {
      return this.store.find('winelist').then(function(array) {
        return array.get('firstObject');
      });
    }

  },
});

App.WineRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('wine', params.anchor || '');
  },
});
