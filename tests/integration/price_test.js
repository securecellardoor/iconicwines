test('Check the Prices in the wine page', function() {
  visit('/wines/2020-very-discount');

  var
    findPrice = '.iconic-prices > .iconic-price',
    findListing = '.iconic-listings > .iconic-listing';

  // check the number of discounts
  andThen(function() {
    equal(find(findPrice).length, 54, 'There are 54 prices');
  });

  // check the contents of each price
  andThen(function() {
    var expected = [
      // wine
      ['$90', 'per bottle', 'save $10'],
      ['$90', 'per bottle', 'save 10%'],
      ['RRP $100', '$90', 'per bottle'],
      ['$10 off', 'every $200'],
      ['10% off', 'every $200'],
      ['$90', 'every $200'],
      ['$10 off', 'for 12 or more'],
      ['10% off', 'for 12 or more'],
      ['for 12 or more'],
      ['$10 off', '$200 or more'],
      ['10% off', '$200 or more'],
      ['$200 or more'],

      // wine shipping
      ['$10 off', 'shipping', 'per 12 pack'],
      ['10% off', 'shipping', 'per 12 pack'],
      ['$90', 'shipping', 'per 12 pack'],
      ['$10 off', 'shipping', 'for every $200'],
      ['10% off', 'shipping', 'for every $200'],
      ['$90', 'shipping', 'for every $200'],
      ['$10 off', 'shipping', 'for 12 or more'],
      ['10% off', 'shipping', 'for 12 or more'],
      ['$90', 'shipping', 'for 12 or more'],
      ['$10 off', 'shipping', 'min. $200'],
      ['10% off', 'shipping', 'min. $200'],
      ['$90', 'shipping', 'min. $200'],

      // tags
      ['$10 off', 'per bottle'],
      ['10% off', 'per bottle'],
      ['$90', 'per bottle'],
      ['$10 off', 'every $200', 'of any product'],
      ['10% off', 'every $200', 'of any product'],
      ['$90', 'every $200', 'of any product'],
      ['$10 off', 'for 12 or more', 'of any product'],
      ['10% off', 'for 12 or more', 'of any product'],
      ['for 12 or more', 'of any product'],
      ['$10 off', '$200 or more', 'of any product'],
      ['10% off', '$200 or more', 'of any product'],
      ['$200 or more', 'of any product'],

      // tag shipping
      ['$10 off', 'shipping', 'per 12 pack', 'of any product'],
      ['10% off', 'shipping', 'per 12 pack', 'of any product'],
      ['$90', 'shipping', 'per 12 pack', 'of any product'],
      ['$10 off', 'shipping', 'for every $200', 'of any product'],
      ['10% off', 'shipping', 'for every $200', 'of any product'],
      ['$90', 'shipping', 'for every $200', 'of any product'],
      ['$10 off', 'shipping', 'for 12 or more', 'of any product'],
      ['10% off', 'shipping', 'for 12 or more', 'of any product'],
      ['$90', 'shipping', 'for 12 or more', 'of any product'],
      ['$10 off', 'shipping', 'in $200 orders', 'of any product'],
      ['10% off', 'shipping', 'in $200 orders', 'of any product'],
      ['$90', 'shipping', 'in $200 orders', 'of any product'],

      // free shipping
      ['Free', 'shipping'],
      ['Free', 'shipping'],
      ['Free', 'shipping', 'per 12 pack'],
      ['Free', 'shipping', 'for 12 or more', 'of any product'],
      ['Free', 'shipping', 'for every $200', 'of any product'],
      ['Free', 'shipping', 'min. $200'],
    ]

    find(findPrice).each(function(i, actual) {
      if(expect = expected[i]) {

        // check the contents
        if(expect) {
          contains(actual.innerText, expect.join("\n"), 'Expected ['+i+'] the content '+expect.join(' '));
        }
      }
    });
  });
});
