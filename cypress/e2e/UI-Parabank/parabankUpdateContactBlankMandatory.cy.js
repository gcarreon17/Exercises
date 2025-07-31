/// <reference types="cypress" />

import parabankPage from '../../support/pages/parabankPages.js';
import { parabankTestData } from '../../support/utils/parabankUtils.js';

const testData =  parabankTestData()

describe("Parabank Registration", { testIsolation: false }, () => {
  before(() => {
    cy.clearBefore();
  });

    it("Verify successful launch of Parabank Registration Page", () => {
      cy.LaunchParabank();
  });


    //Verify assertion of registration page using POM
    it("Verify assertion of Registration page using POM", () => {
      parabankPage.parabankRegistrationForm();
      cy.captureSnapshot("Parabank/Registration Page Field Display");
    });


     
    // Fill in the Registration form from using faker-utility
    it("Verify Filled Registration Form using faker-utility", () => {
      cy.fillParabankRegistrationFormWithData(testData);
        // cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.firstName);
        // cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.lastName);
        // cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.address);
        // cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.city);
        // cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.state);
        // cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.zipCode);
        // cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.phoneNumber);
        // cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.ssn);
        // cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.userName);
        // cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.password);
        // cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.password);
        // cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
        // cy.url().should('include', '/register.htm');
        // cy.get('.title').should('contain', 'Welcome ' + Userinput.userName);
        // cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
        cy.captureSnapshot("Parabank/Filled Registration Form using faker-utility"); 
       });


    //Blank First Name field
    it("Verify blank First Name displays an error message in the Update Profile page", () => {
      cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.firstName']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.firstName']").clear().should('have.value', '');
      cy.get("[id='customer.lastName']").clear().type(testData.lastName + "_Updated");
      cy.get("[id='customer.address.street']").clear().type(testData.address + "_Updated");
      cy.get("[id='customer.address.city']").clear().type(testData.city + "_Updated");
      cy.get("[id='customer.address.state']").clear().type(testData.state + "_Updated");
      cy.get("[id='customer.address.zipCode']").clear().type(testData.zipCode + "999");
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#firstName-error').should('be.visible').and('contain', "First name is required.");
      cy.captureSnapshot("Parabank/Blank First Name Error Message");
      });


    //Blank Last Name field
    it("Verify blank Last Name displays an error message in the Update Profile page", () => {
      cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.lastName']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.lastName']").clear().should('have.value', '');
      cy.get("[id='customer.firstName']").clear().type(testData.firstName + "_Updated");
      cy.get("[id='customer.address.street']").clear().type(testData.address + "_Updated");
      cy.get("[id='customer.address.city']").clear().type(testData.city + "_Updated");
      cy.get("[id='customer.address.state']").clear().type(testData.state + "_Updated");
      cy.get("[id='customer.address.zipCode']").clear().type(testData.zipCode + "999");
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#lastName-error').should('be.visible').and('contain', "Last name is required.");
      cy.captureSnapshot("Parabank/Blank Last Name Error Message");
  });


  //Blank Address field
  it("Verify blank Address displays an error message in the Update Profile page", () => {
     cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.address.street']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.address.street']").clear().should('have.value', '');
      cy.get("[id='customer.firstName']").clear().type(testData.firstName + "_Updated");
      cy.get("[id='customer.address.city']").clear().type(testData.city + "_Updated");
      cy.get("[id='customer.address.state']").clear().type(testData.state + "_Updated");
      cy.get("[id='customer.address.zipCode']").clear().type(testData.zipCode + "999");;
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#street-error').should('be.visible').and('contain', "Address is required.");
      cy.captureSnapshot("Parabank/Blank Address Error Message");
    });


  //Blank City field
  it("Verify blank City displays an error message in the Update Profile page", () => {
     cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.address.city']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.address.city']").clear().should('have.value', '');
      cy.get("[id='customer.firstName']").clear().type(testData.firstName + "_Updated");
      cy.get("[id='customer.lastName']").clear().type(testData.lastName + "_Updated");
      cy.get("[id='customer.address.street']").clear().type(testData.address + "_Updated");
      cy.get("[id='customer.address.state']").clear().type(testData.state + "_Updated");
      cy.get("[id='customer.address.zipCode']").clear().type(testData.zipCode + "999");
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#city-error').should('be.visible').and('contain', "City is required.");
      cy.captureSnapshot("Parabank/Blank City Error Message");
    });

    //Blank State field
  it("Verify blank State displays an error message in the Update Profile page", () => {
     cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.address.state']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.address.state']").clear().should('have.value', '');
      cy.get("[id='customer.firstName']").clear().type(testData.firstName + "_Updated");
      cy.get("[id='customer.lastName']").clear().type(testData.lastName + "_Updated");
      cy.get("[id='customer.address.street']").clear().type(testData.address + "_Updated");
      cy.get("[id='customer.address.city']").clear().type(testData.city + "_Updated");
      cy.get("[id='customer.address.zipCode']").clear().type(testData.zipCode + "999");
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#state-error').should('be.visible').and('contain', "State is required.");
      cy.captureSnapshot("Parabank/Blank State Error Message");
    });


     //Blank Zip Code field
  it("Verify blank Zip Code displays an error message in the Update Profile page", () => {
     cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.address.zipCode']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.address.zipCode']").clear().should('have.value', '');
      cy.get("[id='customer.firstName']").clear().type(testData.firstName + "_Updated");
      cy.get("[id='customer.lastName']").clear().type(testData.lastName + "_Updated");
      cy.get("[id='customer.address.street']").clear().type(testData.address + "_Updated");
      cy.get("[id='customer.address.city']").clear().type(testData.city + "_Updated");
      cy.get("[id='customer.address.state']").clear().type(testData.state + "_Updated");
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#zipCode-error').should('be.visible').and('contain', "Zip Code is required.");
      cy.captureSnapshot("Parabank/Blank Zip Code Error Message");
    });


     //Blank Phone Number field
  it("Verify Phone Number is an optional field", () => {
     cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.phoneNumber']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
      cy.get('input.button[value="Update Profile"]').should('be.visible').click();
      cy.get('#updateProfileResult > .title').should('be.visible').and('contain', "Profile Updated");
      cy.get('#updateProfileResult > p').should('be.visible').and('contain', "Your updated address and phone number have been added to the system.");
      cy.captureSnapshot("Parabank/Contact details successsfully updated when Phone Number is aleft blank");
    });

 

    it("Verify Logout", () => {
    cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click();
    cy.url().should('contain', '/index.htm');
    cy.get('h2').should('be.visible').and('contain', 'Customer Login');
    cy.captureSnapshot("Parabank/Logout");
  });
});