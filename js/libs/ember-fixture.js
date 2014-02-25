DS.FixtureAdapter.reopen({
  queryFixtures: function(records, query, type) {

    if ( query.id && Ember.isArray(query.id) ) {
      query.id = query.id.map(function(id) {
      return id + '';
      });
    }
    return records.filter(function(record) {

      for(var key in query) {
        if (!query.hasOwnProperty(key)) { continue; }

        var queryValue = query[key],
          value = record[key];

        if ( Ember.isArray(queryValue) ) {
          if ( queryValue.contains(value) === false ) { return false; }
        } else {
          if ( value !== queryValue ) { return false; }
        }
      }
      return true;
    });
  },
});
