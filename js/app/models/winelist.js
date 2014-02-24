App.Winelist = DS.Model.extend({
  categories:   DS.hasMany('category', { async: true }),

  anchor:       DS.attr('string'),
  bitly:        DS.attr('string'),
  master:       DS.attr('boolean'),
  membersOnly:  DS.attr('boolean'),
  name:         DS.attr('string'),
});

App.Category = DS.Model.extend({
  winelist:         DS.belongsTo('winelist'),
  productListings:  DS.hasMany('productListing', { async: true }),

  anchor:           DS.attr('string'),
  name:             DS.attr('string'),
  position:         DS.attr('integer'),
});

App.ProductListing = DS.Model.extend({
  winelist:           DS.belongsTo('winelist'),
  category:           DS.belongsTo('category'),

  listableType:       DS.attr('string'),
  merchandise:        DS.belongsTo('merchandise'),
  mixedPack:          DS.belongsTo('mixedPack'),
  wine:               DS.belongsTo('wine'),

  discount:           DS.attr('string'),
  maximum_per_order:  DS.attr('sting'),
  message:            DS.attr('string'),
  minimum_per_order:  DS.attr('sting'),
  number_available:   DS.attr('sting'),
  position:           DS.attr('integer'),
});

App.Winelist.FIXTURES = [
  {
    id: 1,
    name: 'Online',
    anchor: 'online',
    categories: [1,2],
  },
];

App.Category.FIXTURES = [
  {
    id: 1,
    anchor: '',
    name: '',
    productListings: [1,2,3,4],

  },
  {
    id: 2,
    anchor: 'non-wine-products',
    name: 'Non wine products',
    productListings: [5,6,7],
  },
];

App.ProductListing.FIXTURES = [
  {
    id: 1,
    listableType: 'message',
    message: 'Please note this winelist is for test purposes only.<div>There will be no refunds for any test orders.</div>',
  },
  {
    id: 2,
    listableType: 'mixed_pack',
    mixedPack: 2,
  },
  {
    id: 3,
    listableType: 'wine',
    wine: 3,
  },
  {
    id: 4,
    listableType: 'message',
    message: '<div>This message has been left blank intentionally.</div>',
  },
  {
    id: 5,
    listableType: 'merchandise',
    merchandise: 5,
    name: 'Tickets to an event that wont happen (TEST ONLY)',
    anchor: 'testy5',
  },
  {
    id: 6,
    listableType: 'discount',
    discount: 'free shipping for any product',
  },
  {
    id: 7,
    listableType: 'discount',
    discount: '25% off $200 or more of any product',
  },
  {
    id: 8,
    listableType: 'wine',
    wine: 4,
  },
];
