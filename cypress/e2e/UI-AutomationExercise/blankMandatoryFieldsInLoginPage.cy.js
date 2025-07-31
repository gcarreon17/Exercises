///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';

let testData;

  before(() => {
    testData = automationExerciseTestData();
    cy.clearAllCookies();
    cy.LaunchWebsite();
    cy.LaunchSignUpPage();
  });


describe("Blank Mandatory Fields in Login Page", { testIsolation: false }, () => {
  it("Verify Email Address and Password fields in Login Page left blank displays an error message", () => {
    cy.get('[data-qa="login-email"]').should('be.visible').and('have.value', "");
    cy.get('[data-qa="login-password"]').should('be.visible').and('have.value', "");
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"], [data-qa="login-password"]').each(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage);
      });
    cy.captureSnapshot("Automation Exercise UI/Verified email address and password fields in Login Page left blank displayed an error message");
  });


  it("Verify Email address field in Login Page left blank displays an error", () => {
    cy.get('[data-qa="login-email"]').should('be.visible').and('have.value', '')
    cy.get('[data-qa="login-password"]').type(testData.password);
    cy.get('[data-qa="login-button"]').should('be.visible').and("be.enabled");
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise UI/Verified Email Address field in Login Page left blank displayed an error message");
    });
  });


  it("Verify Password field in Login Page left blank displays an error", () => {
    cy.get('[data-qa="login-email"]').type(testData.emailAddress);
    cy.get('[data-qa="login-password"]').should('be.visible').clear().should("have.value", "");
    cy.get('[data-qa="login-button"]').should('be.visible').and("be.enabled");
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-password"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise UI/Verified Password field in Login Page left blank displayed an error message");
    });
  });
});