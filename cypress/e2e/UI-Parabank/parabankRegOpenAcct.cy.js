/// <reference types="cypress" />

import parabankPage from '../../support/pages/parabankPages.js';
import { parabankTestData } from '../../support/utils/parabankUtils';

let testData;

describe("Parabank Registration", { testIsolation: false }, () => {
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
    cy.captureSnapshot("Parabank/Filled Registration Form using POM"); 
    });

   
   //Verify assertion of account opening page
   it("Verify assertion of account opening page", () => {
    cy.get('#leftPanel > ul > :nth-child(1) > a').should('be.visible').and('include.text', "Open New Account").click();
    cy.url().should('contain', '/openaccount.htm');
    cy.get('form > :nth-child(1) > b').should('be.visible').and('include.text', "What type of Account would you like to open?");
    cy.get("select#type").should('be.visible').find('option').should('contain', "CHECKING")
    cy.get("select#type").select(testData.accountType);
    cy.get("select#fromAccountId").should('be.visible').find("option").should("have.length.greaterThan", 0);
    cy.captureSnapshot("Parabank/Verify Open New Account Page  display is correct");
    cy.get('form > div > .button')
   });
    })



    it.skip("Verify user logouts successfully", () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', "Log Out").click();
        cy.url().should('contain', "/index.htm");
        cy.get('h2').should('be.visible').and('contain', "Customer Login");
        cy.captureSnapshot("Parabank/Successfully logged out")
  });  