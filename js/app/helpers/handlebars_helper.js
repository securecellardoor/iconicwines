Ember.Handlebars.helper('htmlsafe', function(value) {
  return new Handlebars.SafeString(value);
});

Ember.Handlebars.helper('pluralize', function(number, word) {
  return word+(number === 1 ? '' : 's');
});

Ember.Handlebars.helper('amountOrPercentage', function(number, amount, percentage) {
  var tag = '';

  if (number) {
    if (amount) { tag = '<span>$</span>'+number; }
    if (percentage) { tag = number+'<span>%</span>'; }

    return new Handlebars.SafeString(tag);
  }
});

Ember.Handlebars.helper('perUnit', function(amount, quantity, product, orMore, shipping, freeShipping, tag) {
  var
    singleName = '',
    multipleName = '';

  switch (product.constructor) {
    case App.Merchandise:
      singleName = 'item';
      multipleName = 'items';
      break;
    case App.MixedPack:
      singleName = 'pack';
      multipleName = 'packs';
      break;
    case App.Wine:
      singleName = 'bottle';
      multipleName = 'pack';
      break;
  }

  var dollar, middle, prefix, suffix = '';

  if (!freeShipping) {
    prefix = 'per';
    suffix = singleName;
  }

  if (amount) {
    if (!shipping) {
      prefix = orMore ? '' : 'every';
      suffix = orMore ? 'or more' : '';
    }
    if (shipping) {
      if (tag) {
        prefix = orMore ? 'in' : 'for every';
        suffix = orMore ? 'orders' : '';
      } else {
        prefix = orMore ? 'min.' : 'for every';
        suffix = orMore ? '' : '';
      }
    }
  }
  if (quantity > 1) {
    // suffix = orMore ? 'or more' : multipleName;
    // prefix = orMore ? '' : 'per';
    prefix = 'per';
    if (orMore) { prefix = shipping ? 'for' : ''; }
    suffix = orMore ? 'or more' : multipleName;
  }

  if (!freeShipping)  { middle = '</span><span>'; }
  if (amount)         { middle = '</span>'+amount+'<span> '; dollar = '$'; }
  if (quantity > 1)   { middle = '</span>'+quantity+'<span> '; }

  var unitTag = ['<span>', prefix, ' ', dollar, middle, suffix, '</span>' ].join('');
  return new Handlebars.SafeString(unitTag);
});
