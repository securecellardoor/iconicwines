App.ProductListingView = Ember.View.extend({
  classNames: ['iconic-listing'],
  classNameBindings: ['computedClass'],
  computedClass: function(){
    return  'iconic-'+this.get('context').get('listableType').dasherize();
  }.property('context'),

  tagName: 'li',
  templateName: function() {
    return 'listed-'+this.get('context').get('listableType').dasherize();
  }.property('context'),
});
