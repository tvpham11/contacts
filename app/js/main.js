// CREATE INSTANCE OF CONTACT COLLECTION

var allContacts = new contactCollection();

// ADD CONTACT
var addContact = function(e) {
  e.preventDefault();

  var contactFirstName, contactLastName, contactDob, contactPhone, contactEmail,
  contactTwitter, contactLinkedIn, contactContactCat;

  function findValue(divID) {
    $(this).find('#' + divID).val();
  }

  contactFirstName = $(this).find('#firstNameField').val();
  //findValue('firstNameField');
  contactLastName = $(this).find('#lastNameField').val();
  contactDob = $(this).find('#birthdayField').val();
  contactPhone = $(this).find('#phoneNoField').val();
  contactEmail = $(this).find('#emailField').val();
  contactTwitter = $(this).find('#twitterField').val();
  contactLinkedIn = $(this).find('#linkedInField').val();
  contactContactCat = $(this).find('#contactCat').val();

  var c = new Contact({
    firstName: contactFirstName,
    lastName: contactLastName,
    dob: contactDob,
    phoneNo: contactPhone,
    email: contactEmail,
    twitter: contactTwitter,
    linkedIn: contactLinkedIn,
    contactCat: contactContactCat
  });

  allContacts.add(c).save().success(function(info) {
    addContactToView(info);
  });

  // RESET FORM

  // this.reset();

};

// DISPLAY CONTACT
var addContactToView = function(person) {
  var contactHtml = template.contact(person);
  $('#contacts').prepend(contactHtml);
};

// SORT CONTACTS
$('#sortCat').change(function () {
  var sortBy = $(this).find('#sortCat').val();

  switch(sortBy) {
    case 'First Name, Ascending': allContacts.sort();
      break;
    case 'First Name, Descending': allContacts.sort();
      break;
    case 'Last Name, Ascending': allContacts.sort();
      break;
    case 'Last Name, Descending': allContacts.sort();
      break;
    case 'Group': allContacts.sort();
      break;
  }

});

// DELETE CONTACT
var deleteContact = function(e) {
  e.preventDefault();

  var contactToDel = $(this).parent(),
      idToDel = contactToDel.attr('id');

  var url = 'http://tiy-515.herokuapp.com/collections/vipcontacts';
  $.ajax({
    url: url + '/' + idToDel,
    type: 'DELETE',
  }).done(function () {
    contactToDel.fadeOut();
  });
};

// SUBMIT LISTENER
$('#addContact').on('submit', addContact);

// DELETE LISTENER

$('#contacts').on('click', 'span', deleteContact);

// MAINTAIN VIEW SAME AS SERVER

allContacts.fetch().done(function() {
  allContacts.each(function(model) {
    addContactToView(model.attributes);
  });
});
