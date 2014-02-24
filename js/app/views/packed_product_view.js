App.PackedProductView = Ember.View.extend({
  templateName: function() {
    return 'packed-'+this.get('context').get('mixableType').dasherize();
  }.property('context'),
});
