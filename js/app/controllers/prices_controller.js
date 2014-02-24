App.PriceController = Ember.ObjectController.extend({
  discount: function() {
    var
      model = this.get('model'),
      discount = model.get('discount'),
      amountOff = model.get('amountOff'),
      percentageOff = model.get('percentageOff'),
      discountTag;

    if (discount) {
      if (amountOff) { discountTag = '<span>$</span>'+discount; }
      if (percentageOff) { discountTag = discount+'<span>%</span>'; }

      return new Handlebars.SafeString(discountTag);;
    }
  }.property('model'),

  perUnit: function() {
    var
      model = this.get('model'),
      amount = model.get('amount'),
      quantity = model.get('quantity'),
      percentageOff = model.get('percentageOff'),
      discountTag;

    if (discount) {
      if (amountOff) { discountTag = '<span>$</span>'+discount; }
      if (percentageOff) { discountTag = discount+'<span>%</span>'; }

      return new Handlebars.SafeString(discountTag);;
    }
  }.property('model'),

  saving: function() {
    var
      model = this.get('model'),
      saving = model.get('saving'),
      amountOff = model.get('amountOff'),
      percentageOff = model.get('percentageOff'),
      savingTag;

    if (saving) {
      if (amountOff) { savingTag = '<span>$</span>'+saving; }
      if (percentageOff) { savingTag = saving+'<span>%</span>'; }

      return new Handlebars.SafeString(savingTag);;
    }
  }.property('model'),
});

