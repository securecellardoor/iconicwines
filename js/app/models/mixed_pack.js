App.MixedPack = DS.Model.extend({
  prices:                     DS.hasMany('price'),
  mixedProducts:              DS.hasMany('mixedProduct', { async: true }),

  anchor:                     DS.attr('string'),
  description:                DS.attr('string'),
  disabled:                   DS.attr('string'),
  name:                       DS.attr('string'),
  photo:                      DS.attr('string'),
  qualifyForPriceDiscount:    DS.attr('string'),
  qualifyForShippingDiscount: DS.attr('string'),
  quantity:                   DS.attr('number'),
  receivePriceDiscount:       DS.attr('string'),
  receiveShippingDiscount:    DS.attr('string'),
  releaseDate:                DS.attr('date'),
  shipsAs:                    DS.attr('string'),
  weight:                     DS.attr('string'),
});

App.MixedProduct = DS.Model.extend({
  mixedPack:    DS.belongsTo('mixedPack'),

  mixableType:  DS.attr('string'),
  merchandise:  DS.belongsTo('merchandise'),
  wine:         DS.belongsTo('wine'),

  quantity:     DS.attr('number'),
});

App.MixedPack.FIXTURES = [
  {
    id: 2,
    anchor: 'non-delverable-mixed-pack-test-only',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ...',
    name: 'Non deliverable Mixed Pack (TEST ONLY)',
    quantity: 7,

    // prices: [1, 61],
    mixedProducts: [3, 5, 6, 7, 8],
  },
];

App.MixedProduct.FIXTURES = [
  {
    id: 3,
    quantity: 6,
    mixableType: 'wine',
    wine: 3,
  },
  {
    id: 5,
    quantity: 2,
    mixableType: 'wine',
    wine: 4,
  },
  {
    id: 6,
    quantity: 2,
    mixableType: 'wine',
    wine: 4,
  },
  {
    id: 7,
    quantity: 2,
    mixableType: 'wine',
    wine: 4,
  },
  {
    id: 8,
    quantity: 1,
    mixableType: 'merchandise',
    merchandise: 5,
  },
];
