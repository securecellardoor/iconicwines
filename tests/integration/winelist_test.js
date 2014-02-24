test('Check the Winelist page', function() {
  visit('/online');

  var
    menuItems = '#iconic-nav li';

  // check the number of menu items
  andThen(function() {
    equal(find(menuItems).length, 5, 'There are five nav items');

    ['Online', 'Non wine products', 'Members Pricing', 'Cart', 'Full Website'].forEach(function(name) {
      ok(find(menuItems+' a:contains("'+name+'")').length, 'There should be a nav item ' + name);
    });

    ['Non wine products', 'Full Website'].forEach(function(name) {
      ok(find(menuItems+'.mobile-only a:contains("'+name+'")').length, 'There should be a mobile only nav item ' + name);
    });
  });

  var
    category = '.iconic-categories > .iconic-category',
    listing = '.iconic-listings > .iconic-listing';

  // check the number of categories and product listings
  andThen(function() {
    equal(find(category).length, 2, 'There are two categories');
    equal(find(category+' '+listing).length, 7, 'There are seven listings');
    equal(find(category+':first-of-type '+listing).length, 4, 'There are four listings');
    equal(find(category+':last-of-type '+listing).length, 3, 'There are three listings');
  });

  // check the names of the categories
  andThen(function() {
    equal(find(category+':first-of-type .iconic-category-name').length, 0, 'There is no name');
    equal(find(category+':last-of-type .iconic-category-name').length, 1, 'There is 1 name');
    contains(find(category+':last-of-type .iconic-category-name').text(), 'Non wine products', 'The name should be non wine products');
  });

  // check the contents of each listing
  andThen(function() {
    var expected = {
      0: {
        className: 'iconic-message',
        contents: [
          'Please note this winelist is for test purposes only.',
          'There will be no refunds for any test orders.',
        ]
      },
      1: {
        className: 'iconic-mixed-pack',
        name: 'Non deliverable Mixed Pack (TEST ONLY)',
        contents: [
          '6 magnums',
          '2 bottles',
          '1 item',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
        ],
        packedProductCount: 5,
        awardCount: 5,
        priceCount: 2,
      },
      2: {
        className: 'iconic-wine',
        name: '2020 No wine will be delivered (TEST ONLY)',
        contents: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'],
        awardCount: 5,
        priceCount: 3,
        varietyCount: 2,
      },
      3: {
        className: 'iconic-message',
        contents: ['This message has been left blank intentionally.'],
      },
      4: {
        className: 'iconic-merchandise',
        name: 'Tickets to an event that wont happen (TEST ONLY)',
        contents: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'],
        priceCount: 2,
      },
      5: {
        className: 'iconic-discount',
        contents: ['free shipping for any product'],
      },
      6: {
        className: 'iconic-discount',
        contents: ['25% off $200 or more of any product'],
      },
    }

    find(category+' '+listing).each(function(i, li) {
      if(expect = expected[i]) {
        containsOrEquals(expect, actual(li), i)
      }
    });
  });
});
