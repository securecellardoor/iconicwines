App.ListedPackedProductView = Ember.View.extend({
  templateName: function() {
    return 'listed-packed-'+this.get('context').get('mixableType').dasherize();
  }.property('context'),

  mixedPack: null,
});
