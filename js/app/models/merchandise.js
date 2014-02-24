App.Merchandise = DS.Model.extend({
  prices:                     DS.hasMany('price', { async: true }),

  anchor:                     DS.attr('string'),
  description:                DS.attr('string'),
  disabled:                   DS.attr('string'),
  name:                       DS.attr('string'),
  photo:                      DS.attr('string'),
  qualifyForPriceDiscount:    DS.attr('string'),
  qualifyForShippingDiscount: DS.attr('string'),
  receivePriceDiscount:       DS.attr('string'),
  receiveShippingDiscount:    DS.attr('string'),
  releaseDate:                DS.attr('date'),
  shipsAs:                    DS.attr('string'),
  unitName:                   DS.attr('string'),
  weight:                     DS.attr('string'),
});

App.Merchandise.FIXTURES = [
  {
    id: 5,
    anchor: 'non-delverable-mixed-pack-test-only',
    name: 'Tickets to an event that wont happen (TEST ONLY)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ...',
    unitName: 'item',

    prices: [1, 61],
  },
];
