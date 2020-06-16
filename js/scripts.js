// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }                          
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }                          
  };
  return false;
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber, emailAddress, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.address = address;
  }


function Address(physicalAddress, work, mailing) {
  this.physicalAddress = physicalAddress;
  this.work = work;
  this.mailing = mailing;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


// User Interface Logic
function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li class=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId, addressBook) {
  let contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.emailAddress);
  $(".physical-address").html(contact.address.physicalAddress);
  $(".work-address").html(contact.address.work);
  $(".mailing-address").html(contact.address.mailing);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append(`<button class='deleteButton ${contact.id}'>Delete</button>`);
}

function attachContactListeners(addressBook) {
  $("ul#contacts").on("click", "li", function() {
    showContact($(this).attr("class"), addressBook);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    let id = $(this).attr("class");
    let sanitizedId = id.slice(12);
    addressBook.deleteContact(sanitizedId);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  let addressBook = new AddressBook();
  attachContactListeners(addressBook);
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    let firstName = $("#new-first-name").val();
    let lastName = $("#new-last-name").val();
    let phoneNumber = $("#new-phone-number").val();
    let emailAddress = $("#new-email-address").val();
    let physicalAddress = $("#new-physical-address").val();
    let work = $("#work-address").val();
    let mailing = $("#mailing-address").val();

    if(!lastName || !firstName || !phoneNumber || !emailAddress || !physicalAddress){
      alert("Empty or incorrect input");
      return;
    }
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email-address").val("");
    $("input#new-physical-address").val("");
    $("input#work-address").val("");
    $("input#mailing-address").val("");

    let addressObj = new Address(physicalAddress, work, mailing);
    let contact = new Contact(firstName, lastName, phoneNumber, emailAddress, addressObj)
    addressBook.addContact(contact);
    displayContactDetails(addressBook);
  });
});