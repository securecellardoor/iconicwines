test('Check the Wine show page', function() {
  visit('/wines/2020-no-wine-will-be-delivered-test-only');

  // check the contents of each listing
  andThen(function() {
    var expected = {
      0: {
        className: 'iconic-wine',
        name: '2020 No wine will be delivered (TEST ONLY)',
        contents: [
          'Tasting notes',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit',
          'Clare Valley - Shiraz 50% - Merlot 50%',
          'Best Wine Trophy',
          '2013 Wine show',
          'Gold medal winner - bold shiraz',
          '2013 Wine show',
          'Silver medal winner - bold shiraz',
          '2012 Wine show',
          'Bronze medal winner - bold shiraz',
          '2012 Wine show',
          '98 points - Big Bird',
          '2012 Big Bird wine companion',
          'Vintage report',
          'Drought like conditions during the peak of the growing season accelerated the development of the vines.',
          'The cooler temperatures in January and February resulted in even ripening and an opportunity to pick prior to the heat wave.',
          '2008 Clare Valley reds show full ripeness, intense tannins and colour.',
          'Wines with longevity.',
          'Winemaking',
          'The fruit is crushed in small half tonne open fermenters.',
          'Over ten days, the ferment is plunge twice daily to control the temperature and extract colour and tannins.',
          'The wine is then left on skins for a further ten day, pressed off and racked into French oak hogsheads.',
          'The wine completes malo-lactic fermentation in oak, racked out and fined then returned for up to 2 years',
        ],
        awardCount: 5,
        priceCount: 3,
        varietyCount: 2,
      },
    }

    find('.iconic-product').each(function(i, li) {
      if(expect = expected[i]) {
        containsOrEquals(expect, actual(li), i)
      }
    });
  });
});
