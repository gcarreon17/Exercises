///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';

let testData;

  before(() => {
    testData = automationExerciseTestData();
    cy.clearAllCookies();
    cy.LaunchWebsite();
    cy.LaunchSignUpPage();
  });


describe("Blank Mandatory Fields in SignUp Page", { testIsolation: false }, () => {
  it("Verify Name and Email Address fields in SignUp Page left blank displays an error message", () => {
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-name"], [data-qa="signup-email"]').each(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage);
      });
    cy.captureSnapshot("Automation Exercise UI/Verified name and email fields in SignUp Page left blank displayed an error message");
  });


  it("Verify Name field in SignUp Page left blank displays an error", () => {
    cy.get('[data-qa="signup-name"]').should("have.value", "");
    cy.get('[data-qa="signup-button"]').should('be.visible').and("be.enabled");
    cy.captureSnapshot("Automation Exercise UI/Verified blank email field in SignUp Page displayed an error message");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-name"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise UI/Verified name field in SignUp Page left blank displayed an error message");
    });
  });


  it("Verify Email Address field in SignUp Page left blank displays an error", () => {
    cy.get('[data-qa="signup-name"]').type(testData.signUpName);
    cy.get('[data-qa="signup-email"]').should("have.value", "");
    cy.get('[data-qa="signup-button"]').should('be.visible').and("be.enabled");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise UI/Verified email field in SignUp Page left blank displayed an error message");
    });
  });
});