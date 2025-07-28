///<reference types="cypress" />

describe("Blank Mandatory Fields in Login Page", { testIsolation: false }, () => {
  it("Verify Email Address and Password fields in Login Page left blank display an error message", () => {
    cy.LaunchSignUpPage();
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"], [data-qa="login-password"]').each(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage);
      });
    cy.captureSnapshot("Automation Exercise/Verified email and password fields in Login Page left blank displayed an error message");
   });


  it("Verify email field in Login Page left blank displays an error message", () => {
    cy.LaunchSignUpPage();
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified email field in SignUp Page left blank displayed an error message");
   });
  });


  it("Verify password field in Login Page left blank displays an error message", () => {
    cy.LaunchSignUpPage();
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-password"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified password field in SignUp Page left blank displayed an error message");
   });
  });
});