/// <reference types="cypress" />

import parabankPage from '../../../support/pages/parabankPages.js';
import { parabankTestData } from '../../../support/utils/parabankUtils.js';

let testData;

describe("Parabank Registration", { testIsolation: false }, () => {
  before(() => {
    cy.clearBefore();
    testData = parabankTestData();
  });

    it("Verify successful launch of Parabank Registration Page", () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.url().should('contain', '/register.htm');
    cy.title().should('contain', 'ParaBank | Register for Free Online Account Access');
    cy.captureSnapshot("Parabank/Redirection to Parabank Registration Page");
  });


    //Verify registration page using POM
    it("Verify field display in Registration Page using POM", () => {
      parabankPage.parabankRegistrationForm(testData);
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


       it("Verify successful update of contact info", () => {
        cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
        cy.get("[id='customer.firstName']").should('be.visible').click();
        cy.wait(1000);
        cy.get("[id='customer.firstName']").type(testData.firstNameUpdated);
        cy.get("input[id='customer.lastName']").should('be.visible').click();
        cy.wait(1000);
        cy.get("input[id='customer.lastName']").type(testData.lastNameUpdated);
        cy.get("input[id='customer.address.street']").should('be.visible').click();   
        cy.wait(1000);
        cy.get("input[id='customer.address.street']").type(testData.addressUpdated);
        cy.get("input[id='customer.address.city']").should('be.visible').click();
        cy.wait(1000);
        cy.get("input[id='customer.address.city']").type(testData.city);
        cy.get("input[id='customer.address.state']").should('be.visible').click();
        cy.wait(1000);
        cy.get("input[id='customer.address.state']").type(testData.stateUpdated);
        cy.get("input[id='customer.address.zipCode']").should('be.visible').click();
        cy.wait(1000);
        cy.get("input[id='customer.address.zipCode']").type(testData.zipCodeUpdated);
        cy.get("input[id='customer.phoneNumber']").should('be.visible').click();
        cy.wait(1000);
        cy.get("input[id='customer.phoneNumber']").type(testData.phoneNumberUpdated);
        cy.get('input.button[value="Update Profile"]').should('be.visible').click();
        cy.get('#updateProfileResult > .title').should('be.visible').and('contain', "Profile Updated");
        cy.get('#updateProfileResult > p').should('be.visible').and('contain', "Your updated address and phone number have been added to the system.");
        cy.captureSnapshot("Parabank/Contact details successsfully updated when Phone Number is aleft blank");
       });
    });

    



    it("Verify Logout", () => {
      cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click();
      cy.url().should('contain', '/index.htm');
      cy.get('h2').should('be.visible').and('contain', 'Customer Login');
      cy.captureSnapshot("Parabank/Logout");
  }); 