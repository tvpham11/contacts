var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiy-515.herokuapp.com/collections/vipcontacts',

  initialize: function () {
   this.changeSort('_id');
  },

  comparator: function (property) {
    return selectedStrategy.apply(Contact.get(property));
  },
  // Different contact properties available for sorting
  strategies: {
    dateAdded: function (person) {
      return person.get('_id');
    },
    firstName: function (person) {
      return person.get('firstName');
    },
    lastName: function (person) {
      return person.get('lastName');
    },
    contactCat: function (person) {
      return person.get('contactCat');
    }
  },
  // Change to selected 'strategy' passed in param
  changeSort: function (sortProperty) {
    this.comparator = this.strategies[sortProperty];
  },
});
