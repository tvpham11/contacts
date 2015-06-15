;(function () {
  'use strict';

  // CREATE INSTANCE OF CONTACT COLLECTION

  var allContacts = new ContactCollection();

  // ADD CONTACT
  var addContact = function(e) {
    e.preventDefault();

    var contactFirstName, contactLastName, contactDob, contactPhone, contactEmail,
    contactTwitter, contactLinkedIn, contactContactCat;

    // function findValue(divID) {
    //   $(this).find('#' + divID).val();
    // }

    contactFirstName = $(this).find('#firstNameField').val();
    //findValue('firstNameField');
    contactLastName = $(this).find('#lastNameField').val();
    contactDob = $(this).find('#birthdayField').val();
    contactPhone = $(this).find('#phoneNoField').val();
    contactEmail = $(this).find('#emailField').val();
    contactTwitter = $(this).find('#twitterField').val();
    contactLinkedIn = $(this).find('#linkedInField').val();
    contactContactCat = $(this).find('#contactCat option:selected').text();

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

  // UPDATE CONTACT
  var updateView = function(person) {
    var contactHtml = template.contact(person);
    $('#contacts').append(contactHtml);
  };

  // SORT CONTACTS
  $('#sortCat').change(function () {
    var sortBy = $(this).val();

    switch(sortBy) {
      case 'dateAdded':
          allContacts.changeSort('_id');
          allContacts.sort();
          allContacts.models.reverse();
        break;
      case 'firstNameAsc':
          allContacts.changeSort('firstName');
          allContacts.sort();
        break;
      case 'firstNameDes':
          allContacts.changeSort('firstName');
          allContacts.sort();
          allContacts.models.reverse();
        break;
      case 'lastNameAsc':
          allContacts.changeSort('lastName');
          allContacts.sort();
        break;
      case 'lastNameDes': allContacts.sort();
          allContacts.changeSort('lastName');
          allContacts.sort();
          allContacts.models.reverse();
        break;
      case 'contactCategory':
          allContacts.changeSort('contactCat');
          allContacts.sort();
        break;
    }

    $( "#contacts" ).empty();
    allContacts.fetch().done(function() {
      allContacts.each(function(model) {
        updateView(model.attributes);
      });
    });

  });

  // DELETE CONTACT
  var deleteContact = function(e) {
    e.preventDefault();

    var contactToDel = $(this).parent(),
        idToDel = contactToDel.attr('id');

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
      updateView(model.attributes);
    });
  });
})();
