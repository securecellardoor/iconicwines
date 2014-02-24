function contains(actual, content, message) {
  if (actual === undefined) { actual = ''; }
  QUnit.push(actual.indexOf(content) != -1, actual, content, message);
}

function actual(el) {
  return {
    className: find(el).attr('class'),
    contents: el.innerText,
    name: find('.iconic-name', el).text(),
    packedProductCount: find('.iconic-mixed-product', el).length,
    awardCount: find('.iconic-awards img', el).length,
    priceCount: find('.iconic-price', el).length,
    varietyCount: find('.iconic-variety', el).length,
  }
}

function containsOrEquals(expect, actual, i) {
  var containTests = [
    'className',
    'contents',
    'name',
  ]
  var equalTests = [
    'packedProductCount',
    'awardCount',
    'priceCount',
    'varietyCount',
  ]

  containTests.forEach(function(key) {
    if (expect[key]) {
      var expectedContent = [].concat.apply([], [expect[key]]);
      expectedContent.forEach(function(content) {
        contains(actual[key], content, 'Expected the '+key+' of ['+i+'] to contain "'+content+'"');
      });
    }
  });

  equalTests.forEach(function(key) {
    if (expect[key]) {
      equal(actual[key], expect[key], 'Expected the '+key+' of ['+i+'] to equal '+expect[key]);
    }
  });
}
