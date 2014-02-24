App.Price = DS.Model.extend({
  wine:           DS.belongsTo('wine'),
  tag:            DS.belongsTo('tag', { async: true }),

  amountOff:      DS.attr('boolean'),
  percentageOff:  DS.attr('boolean'),
  fixedPrice:     DS.attr('boolean'),
  orMore:         DS.attr('boolean'),
  amount:         DS.attr('string'),
  quantity:       DS.attr('string'),

  cost:           DS.attr('number'),
  discount:       DS.attr('number'),
  rrp:            DS.attr('number'),
  saving:         DS.attr('number'),
  type:           DS.attr('string'),

  freeShipping: function() {
    if (this.get('shipping')) {
      if (this.get('fixedPrice') && this.get('cost') === 0) {
        return true;
      }

      if (this.get('percentageOff') && this.get('discount') === 100) {
        return true;
      }
    }
  }.property('cost', 'discount', 'fixedPrice', 'percentageOff', 'shipping'),

  price: function() {
    return this.get('type') === 'price' ? true : false;
  }.property('type'),

  shipping: function() {
    return this.get('type') === 'shipping' ? true : false;
  }.property('type'),
});

App.Price.FIXTURES = [
  {
    id: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    quantity: 1,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 2,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    quantity: 1,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 3,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    quantity: 1,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 4,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 5,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 6,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 7,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 8,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 9,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 10,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 11,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 12,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 13,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 14,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 15,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 16,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 17,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 18,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 19,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 20,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 21,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 22,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 23,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 24,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 31,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    quantity: 1,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 32,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    quantity: 1,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 33,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    quantity: 1,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 34,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 35,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 36,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 37,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 38,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 39,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 40,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 41,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 42,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'price',
  },
  {
    id: 43,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 44,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 45,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 46,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 47,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 48,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 49,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 50,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 51,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    quantity: 12,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 52,
    tag: 1,
    amountOff: true,
    percentageOff: false,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 53,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },
  {
    id: 54,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    amount: 200,

    cost: 90,
    discount: 10,
    rrp: 100,
    saving: 10,
    type: 'shipping',
  },

  {
    id: 61,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: true,
    quantity: 1,

    cost: 0,
    type: 'shipping',
  },
  {
    id: 62,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    quantity: 1,

    discount: 100,
    type: 'shipping',
  },
  {
    id: 63,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    quantity: 12,

    cost: 0,
    type: 'shipping',
  },
  {
    id: 64,
    tag: 1,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    quantity: 12,

    discount: 100,
    type: 'shipping',
  },
  {
    id: 65,
    tag: 1,
    amountOff: false,
    percentageOff: false,
    fixedPrice: true,
    orMore: false,
    amount: 200,

    cost: 0,
    type: 'shipping',
  },
  {
    id: 66,
    amountOff: false,
    percentageOff: true,
    fixedPrice: false,
    orMore: true,
    amount: 200,

    discount: 100,
    type: 'shipping',
  },
];
