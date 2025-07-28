class ParabankPage {
    // Label selectors
    firstNameLabel = ':nth-child(1) > [align="right"] > b';
    lastNameLabel = ':nth-child(2) > [align="right"] > b';
    addressLabel = ':nth-child(3) > [align="right"] > b';
    cityLabel = ':nth-child(4) > [align="right"] > b';
    stateLabel = ':nth-child(5) > [align="right"] > b';
    zipCodeLabel = ':nth-child(6) > [align="right"] > b';
    phoneLabel = ':nth-child(7) > [align="right"] > b';
    ssnLabel = ':nth-child(8) > [align="right"] > b';
    usernameLabel = ':nth-child(10) > [align="right"] > b';
    passwordLabel = ':nth-child(11) > [align="right"] > b';
    confirmLabel = ':nth-child(12) > [align="right"] > b';
     firstNameLabel = ':nth-child(1) > [align="right"] > b';
    lastNameLabel = ':nth-child(2) > [align="right"] > b';
    addressLabel = ':nth-child(3) > [align="right"] > b';
    cityLabel = ':nth-child(4) > [align="right"] > b';
    stateLabel = ':nth-child(5) > [align="right"] > b';
    zipCodeLabel = ':nth-child(6) > [align="right"] > b';
    phoneLabel = ':nth-child(7) > [align="right"] > b';

    // Textbox selectors
    firstNameTextbox = "input[id='customer.firstName']";
    lastNameTextbox = "input[id='customer.lastName']";
    addressTextbox = "input[id='customer.address.street']";
    cityTextbox = "input[id='customer.address.city']";
    stateTextbox = "input[id='customer.address.state']";
    zipCodeTextbox = "input[id='customer.address.zipCode']";
    phoneNumberTextbox = "input[id='customer.phoneNumber']";
    ssnTextbox = "input[id='customer.ssn']";
    usernameTextbox = "input[id='customer.username']";
    passwordTextbox = "input[id='customer.password']";
    confirmTextbox = "input[id='repeatedPassword']";

    //Button selector
    registerButton = '[colspan="2"] > .button';
    updateProfileButton = "input.button[value='Update Profile']";
    openNewAccountButton = "input.button[value='Open New Account']";

    //dropdown selector
    accountTypeDropdown = '#type';
    accountNumberDropdown = '#accountId';

  

  
    //Method to assert label and empty input field visibility
    parabankRegistrationForm() {
    cy.get(this.firstNameLabel).should("be.visible").and("contain", "First Name");
    cy.get(this.firstNameTextbox).should("be.visible").and("be.empty");
    cy.get(this.lastNameLabel).should("be.visible").and("contain", "Last Name");
    cy.get(this.lastNameTextbox).should("be.visible").and("be.empty");
    cy.get(this.addressLabel).should("be.visible").and("contain", "Address");
    cy.get(this.addressTextbox).should("be.visible").and("be.empty");
    cy.get(this.cityLabel).should("be.visible").and("contain", "City");
    cy.get(this.cityTextbox).should("be.visible").and("be.empty");
    cy.get(this.stateLabel).should("be.visible").and("contain", "State");
    cy.get(this.stateTextbox).should("be.visible").and("be.empty");
    cy.get(this.zipCodeLabel).should("be.visible").and("contain", "Zip Code");
    cy.get(this.zipCodeTextbox).should("be.visible").and("be.empty");
    cy.get(this.phoneLabel).should("be.visible").and("contain", "Phone");
    cy.get(this.phoneNumberTextbox).should("be.visible").and("be.empty");
    cy.get(this.ssnLabel).should("be.visible").and("contain", "SSN");
    cy.get(this.ssnTextbox).should("be.visible").and("be.empty");
    cy.get(this.usernameLabel).should("be.visible").and("contain", "Username");
    cy.get(this.usernameTextbox).should("be.visible").and("be.empty");
    cy.get(this.passwordLabel).should("be.visible").and("contain", "Password");
    cy.get(this.passwordTextbox).should("be.visible").and("be.empty");
    cy.get(this.confirmLabel).should("be.visible").and("contain", "Confirm");
    cy.get(this.confirmTextbox).should("be.visible").and("be.empty");
    cy.get(this.registerButton).should("be.visible").and("contain", "Register");
    };

    //Method to fill in the registration form with data
    fillRegistrationFormWithData(testData) {
      cy.get(this.firstNameTextbox).type(testData.firstName);
      cy.get(this.lastNameTextbox).type(testData.lastName);
      cy.get(this.addressTextbox).type(testData.address);
      cy.get(this.cityTextbox).type(testData.city);
      cy.get(this.stateTextbox).type(testData.state);
      cy.get(this.zipCodeTextbox).type(testData.zipCode);
      cy.get(this.phoneNumberTextbox).type(testData.phoneNumber);
      cy.get(this.ssnTextbox).type(testData.ssn);
      cy.get(this.usernameTextbox).type(testData.userName);
      cy.get(this.passwordTextbox).type(testData.password);
      cy.get(this.confirmTextbox).type(testData.confirmPassword);
      cy.get(this.registerButton).click();
    };
  };
  
  

    //Method to assert elements in Open New Account page
    // openNewAccountPage() {
    //   cy.get(this.accountTypeDropdown).should("be.visible");
    //   cy.get(this.accountNumberDropdown).should("be.visible");
    //   cy.get(this.openNewAccountButton).should("be.visible").and("contain", "Open New Account");
    // }
      

  export default new ParabankPage();

