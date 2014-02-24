App.Wine = DS.Model.extend({
  awards:                     DS.hasMany('award', { async: true }),
  prices:                     DS.hasMany('price', { async: true }),
  regions:                    DS.hasMany('region', { async: true }),

  acid:                       DS.attr('string'),
  alcohol:                    DS.attr('string'),
  anchor:                     DS.attr('string'),
  bottleName:                 DS.attr('string'),
  disabled:                   DS.attr('string'),
  maturation:                 DS.attr('string'),
  name:                       DS.attr('string'),
  pH:                         DS.attr('string'),
  photo:                      DS.attr('string'),
  qualifyForPriceDiscount:    DS.attr('string'),
  qualifyForShippingDiscount: DS.attr('string'),
  receivePriceDiscount:       DS.attr('string'),
  receiveShippingDiscount:    DS.attr('string'),
  releaseDate:                DS.attr('date'),
  residualSugar:              DS.attr('string'),
  shipsAs:                    DS.attr('string'),
  standardDrinks:             DS.attr('string'),
  sulphur:                    DS.attr('string'),
  tastingNotes:               DS.attr('string'),
  unitName:                   DS.attr('string'),
  vintageReport:              DS.attr('string'),
  weight:                     DS.attr('string'),
  volatileAcids:              DS.attr('string'),
  year:                       DS.attr('string'),
});

App.Award = DS.Model.extend({
  wine:         DS.belongsTo('wine'),

  description:  DS.attr('string'),
  name:         DS.attr('string'),
  photo:        DS.attr('string'),
  position:     DS.attr('integer'),
  year:         DS.attr('string'),
});

App.Region = DS.Model.extend({
  wine:       DS.belongsTo('wine'),

  name:       DS.attr('string'),
  varieties:  DS.hasMany('variety', { async: true }),
});

App.Variety = DS.Model.extend({
  region:     DS.belongsTo('region'),

  name:       DS.attr('string'),
  percentage: DS.attr('integer'),
});

App.Wine.FIXTURES = [
  {
    id: 3,
    anchor: '2020-no-wine-will-be-delivered-test-only',
    maturation: 'The fruit is crushed in small half tonne open fermenters.&nbsp; Over ten days, the ferment is plunge twice daily to control the temperature and extract colour and tannins.The wine is then left on skins for a further ten day, pressed off and racked into French oak hogsheads.&nbsp; The wine completes malo-lactic fermentation in oak, racked out and fined then returned for up to 2 years',
    name: '2020 No wine will be delivered (TEST ONLY)',
    tastingNotes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ...',
    unitName: 'magnum',
    vintageReport: 'Drought like conditions during the peak of the growing season accelerated the development of the vines.&nbsp; The cooler temperatures in January and February resulted in even ripening and an opportunity to pick prior to the heat wave. 2008 Clare Valley reds show full ripeness, intense tannins and colour.&nbsp; Wines with longevity.',
    year: '2012',

    awards: [1, 2, 3, 4, 5],
    prices: [1, 62, 63],
    regions: [1],
  },
  {
    id: 4,
    anchor: '2020-very-discount',
    maturation: 'The fruit is crushed in small half tonne open fermenters.&nbsp; Over ten days, the ferment is plunge twice daily to control the temperature and extract colour and tannins.The wine is then left on skins for a further ten day, pressed off and racked into French oak hogsheads.&nbsp; The wine completes malo-lactic fermentation in oak, racked out and fined then returned for up to 2 years',
    name: '2020 Very discount',
    tastingNotes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ...',
    unitName: 'bottle',
    vintageReport: 'Drought like conditions during the peak of the growing season accelerated the development of the vines.&nbsp; The cooler temperatures in January and February resulted in even ripening and an opportunity to pick prior to the heat wave. 2008 Clare Valley reds show full ripeness, intense tannins and colour.&nbsp; Wines with longevity.',
    year: '2012',

    prices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 66],
  },
];

App.Award.FIXTURES = [
  {
    id: 1,
    description: '<div>Best Wine Trophy<div>2013 Wine show</div></div>',
    name: 'Trophy',
    position: 1,
    year: '2013',
  },
  {
    id: 2,
    description: '<div><div>Gold medal winner - bold shiraz</div>2013 Wine show</div>',
    name: 'Gold',
    position: 2,
    year: '2013',
  },
  {
    id: 3,
    description: '<div>Silver medal winner - bold shiraz<div>2012 Wine show</div></div>',
    name: 'Silver',
    position: 3,
    year: '2012',
  },
  {
    id: 4,
    description: '<div>Bronze medal winner - bold shiraz<div>2012 Wine show</div></div>',
    name: 'Bronze',
    position: 4,
    year: '2012',
  },
  {
    id: 5,
    description: '<div>98 points - Big Bird<div>2012 Big Bird wine companion</div></div>',
    name: '98 points',
    position: 5,
    year: '2012',
  },
];

App.Region.FIXTURES = [
  {
    id: 1,
    name: 'Clare Valley',
    varieties: [1, 2],
  },
];

App.Variety.FIXTURES = [
  {
    id: 1,
    name: 'Shiraz',
    percentage: 50,
  },
  {
    id: 2,
    name: 'Merlot',
    percentage: 50,
  },
];
