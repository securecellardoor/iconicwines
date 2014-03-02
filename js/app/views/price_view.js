App.PricesView = Ember.View.extend({
  classNames: ['iconic-prices'],
  tagName: 'ul',
  templateName: 'prices',
});

App.PriceView = Ember.View.extend({
  classNames: ['iconic-price'],
  tagName: 'li',
  templateName: 'price',
});

App.PriceCostView = Ember.View.extend({
  classNames: ['iconic-cost'],
  templateName: function() {
    var price = this.get('context');

    if (price.get('freeShipping')) { return; }
    if (price.get('orMore') && price.get('price')) { return; }
    if (price.get('fixedPrice')) { return 'price-cost'; }
    if (price.get('price') && !price.get('amount') && !price.get('tag')) {
      return 'price-cost';
    }
  }.property('context'),
});

App.PriceDiscountView = Ember.View.extend({
  classNames: ['iconic-cost'],
  templateName: function() {
    var price = this.get('context');

    if (price.get('freeShipping')) { return; }
    if (price.get('fixedPrice')) { return; }
    if (price.get('amount') || price.get('shipping') || price.get('tag') || price.get('orMore')) {
      return 'price-discount';
    }
  }.property('context'),
});

App.PriceFreeShippingView = Ember.View.extend({
  classNames: ['iconic-free-shipping'],
  templateName: function() {
    var price = this.get('context');

    if (!price.get('freeShipping')) { return; }
    return 'price-free-shipping';
  }.property('context'),
});

App.PriceRrpView = Ember.View.extend({
  classNames: ['iconic-rrp'],
  templateName: function() {
    var price = this.get('context');
    if (!price.get('rrp')) { return; }

    if (price.get('orMore')) { return; }
    if (price.get('amount') || price.get('tag')) { return; }
    if (price.get('price') && price.get('fixedPrice')) {
      return 'price-rrp';
    }
  }.property('context'),
});

App.PriceSavingView = Ember.View.extend({
  classNames: ['iconic-saving'],
  templateName: function() {
    var price = this.get('context');

    if (price.get('orMore')) { return; }
    if (price.get('amount') || price.get('shipping') || price.get('tag')) { return; }
    if (!price.get('fixedPrice')) {
      return 'price-saving';
    }
  }.property('context'),
});

App.PriceShippingView = Ember.View.extend({
  classNames: ['iconic-shipping'],
  templateName: function() {
    var price = this.get('context');

    if (!price.get('shipping')) { return; }
    return 'price-shipping';
  }.property('context'),
});

App.PriceTagView = Ember.View.extend({
  classNames: ['iconic-tag'],
  templateName: function() {
    var price = this.get('context');

    if (!price.get('tag')) { return; }
    return 'price-tag';
  }.property('context'),
});

App.PriceUnitView = Ember.View.extend({
  classNames: ['iconic-unit'],
  templateName: function() {
    return 'price-unit';
  }.property('context'),
});
