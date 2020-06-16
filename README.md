# Webpage: Address Book

#### Address Book for Epicodus, 6.16.2020

#### By Nikolas Kososik, Vanessa Guerrero

## Description

The purpose of this application is to collect contact information from a user and populate an address book.

## Setup/Installation Requirements

* Find the repository of this application [here](https://github.com/vguer/addressbooktuesday.git) and click the green "Clone or Download Folder" to download a zip file with all its contents.
* Once file is downloaded, open with Visual Studio Code or the text editor of your choice to view the code.
* To view and intereact with the webpage using Visual Studio Code, click on Terminal > New Terminal. Once a terminal opens, type "open index.html" and hit enter. This will open the page onto a browser window.


## Specifications

**Behavior** Takes user input and returns it
* Input: text
* Output text

**Behavior** Checks to see if input is empty 
* Input: empty input
* Output "Empty or incorrect input"

**Behavior** It creates an Address Book
* Input: no input necessary 
* Output: Address Book Object: {contacts: [], currentId: 0}

**Behavior** Program creates a contact
* Input: User's "first name, last name, phone number, email address, physical address"
* Output: Contact Object: {firstName, lastName, phoneNumber, emailAddress, physicalAddress}

**Behavior** Program provides contact object's properties
* Input: "Click" on contact name
* Output: firstName, lastName, phoneNumber, emailAddress, physicalAddress

**Behavior** Add contact to the address book and assigns Id
* Input: Contact Object: {firstName: "Sam" , lastName: "Lot" , phoneNumber: "5555556565", emailAddress: "myemail@gmail.com", physicalAddress: "420 Paper Street"}
* Output: AddressBook Object has 1 contact: {id: 1, firstName: "Sam" , lastName: "Lot" , phoneNumber: "5555556565", emailAddress: "myemail@gmail.com", physicalAddress: "420 Paper Street"}

**Behavior** Program finds contact with given id
* Input: id 7
* Output: Contact Object: {id: 7, firstName: "Rex" , lastName: "Burg" , phoneNumber: "1112223434", emailAddress: "youremail@yahoo.com", physicalAddress: "55 E Trail Mix Lane"}

**Behavior** Program deletes contact with given id
* Input: id 7
* Output: Contact Object with id 7 has been deleted from the address book
## Known Bugs

There are no known bugs.

## Support and contact details

For feedback or concerns about this project, please contact one of the conbributors.

## Technologies Used

This project is created using:
* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2020 Nikolas Kososik, Vanessa Guerrero 