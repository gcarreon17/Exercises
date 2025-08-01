/// <reference types="cypress" />

import parabankPage from '../../support/pages/parabankPages.js';
import { parabankTestData } from '../../support/utils/parabankUtils.js';
import { faker } from '@faker-js/faker';



describe("Parabank Registration_UpdateContact Infor", { testIsolation: false }, () => {
  let testData;

  before(() => {
    cy.clearBefore();
    testData = parabankTestData();
  });


  it("Verify successful launch of Parabank Registration Page", () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.url().should('contain', "/register.htm");
    cy.title().should('contain', "ParaBank | Register for Free Online Account Access");
    cy.captureSnapshot("Parabank/Redirection to Parabank Registration Page");
  });


  //Verify registration page using POM
  it("Verify field display in Registration Page using POM", () => {
    parabankPage.parabankRegistrationForm(testData);
    cy.captureSnapshot("Parabank/Registration Page Field Display");
  });

      

   // Fill in the Registration form using page object model
   it("Fill in the Registration form using POM", () => {
    parabankPage.fillRegistrationFormWithData(testData);
    cy.captureSnapshot("Parabank/Filled Registration Form using POM");
    cy.get('.title').should('contain', 'Welcome ' + testData.userName);
    cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    cy.captureSnapshot("Parabank/Successful Registration using POM"); 
    });

    it("Verify successful update of contact information page", () => {
      cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
    

    it("Verify successful update of ALL contact information", () => {
     cy.get('#leftPanel > ul > :nth-child(6) > a').should('be.visible').and('contain', "Update Contact Info").click();
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
      cy.get("[id='customer.phoneNumber']").should('be.visible').click()
      cy.wait(1000);
      cy.get("[id='customer.firstName']").clear().type(testData.firstName + "_Updated");
      cy.get("[id='customer.lastName']").clear().type(testData.lastName + "_Updated");
      cy.get("[id='customer.address.street']").clear().type(testData.address + "_Updated");
      cy.get("[id='customer.address.city']").clear().type(testData.city + "_Updated");
      cy.get("[id='customer.address.state']").clear().type(testData.state + "_Updated");
      cy.get("[id='customer.address.zipCode']").clear().type(testData.zipCode + "999");
      cy.get("[id='customer.phoneNumber']").clear().type(testData.phoneNumber + "999");
    });
      
    });
  });