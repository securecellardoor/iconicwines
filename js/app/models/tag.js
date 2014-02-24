App.Tag = DS.Model.extend({
  anchor: DS.attr('string'),
  name:   DS.attr('string'),
});

App.Tag.FIXTURES = [
  {
    id: 1,
    anchor: 'product',
    // name: 'really long winded and poorly named product'
    name: 'product',
  },
  {
    id: 2,
    anchor: 'product',
    name: 'VIP product',
  },
  {
    id: 3,
    anchor: 'product',
    name: 'members product',
  },
]
