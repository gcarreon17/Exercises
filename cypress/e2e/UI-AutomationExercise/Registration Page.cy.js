///<reference types="cypress" />

describe("Blank Mandatory Fields in Registration Page", { testIsolation: false }, () => {
   it("Verify ALL fields in Login Page left blank display an error message", () => {
    cy.SignUpLogin(testData);
    cy.get('[data-qa="name"]').clear();
    cy.get('[data-qa="name"]').should('be.empty');
    cy.get('[data-qa="password"]').should('be.empty');
    cy.get('[data-qa="first_name"]').should('be.empty');
    cy.get('[data-qa="last_name"]').should('be.empty');
    cy.get('[data-qa="address"]').should('be.empty');  
    cy.get('[data-qa="state"]').should('be.empty');
    cy.get('[data-qa="city"]').should('be.empty');
    cy.get('[data-qa="zipcode"]').should('be.empty');
    cy.get('[data-qa="mobile_number"]').should('be.empty');
    cy.get('[data-qa="create-account"]').should('be.visible').invoke('text').should('eq', "Create Account")
    cy.get('[data-qa="create-account"]').click();
    cy.get([
     '[data-qa="name"]',
     '[data-qa="password"]',
     '[data-qa="first_name"]',
     '[data-qa="last_name"]',
     '[data-qa="address"]',
     '[data-qa="state"]',
     '[data-qa="city"]',
     '[data-qa="zipcode"]',
     '[data-qa="mobile_number"]'
       ].join(',')).each(($input) => {
         expect($input[0].checkValidity()).to.be.false;
       cy.log(`${$input[0].getAttribute('data-qa')} ➜ ${$input[0].validationMessage}`);
     });
     cy.captureSnapshot("Automation Exercise/Verified name and email fields in SignUp Page left blank displayed an error message");
  });
});


//Payment Page
describe("Blank Mandatory Fields in Payment Page", { testIsolation: false }, () => {
  before(() => {
    cy.SignUpLogin(testData);
    cy.Registration(testData);
    cy.SuccessfulRegistration(testData);
    cy.LoginAsName(testData);
    cy.AddtoCart(productsData);
    cy.CheckCartDetails(productsData);
    cy.ProceedCheckout(productsData);
    cy.ReviewOrder(testData);
});

  it("Verify ALL fields in Payment Page left blank display an error message", () => {
    cy.get('[data-qa="name-on-card"]').should('be.empty');
    cy.get('[data-qa="card-number"]').should('be.empty');
    cy.get('[data-qa="cvc"]').should('be.empty');
    cy.get('[data-qa="expiry-month"]').should('be.empty');
    cy.get('[data-qa="expiry-year"]').should('be.empty');
    cy.get('[data-qa="pay-button"]').should('be.visible').invoke('text').should('eq', "Pay and Confirm Order");
    cy.get('[data-qa="pay-button"]').click();
    cy.get([
     '[data-qa="name-on-card"]',
     '[data-qa="card-number"]',
     '[data-qa="cvc"]',
     '[data-qa="expiry-month"]',
     '[data-qa="expiry-year"]'
       ].join(',')).each(($input) => {
         expect($input[0].checkValidity()).to.be.false;
       cy.log(`${$input[0].getAttribute('data-qa')} ➜ ${$input[0].validationMessage}`);
     });
    cy.captureSnapshot("Automation Exercise/Verified ALL mandatory fields in Payment Page left blank displayed an error message");
    });


  it("Verify Name field in Payment Page left blank displays an error message", () => {
    cy.get('[data-qa="name-on-card"]').should('be.empty');
    cy.get('[data-qa="card-number"]').type(testData.cardNumber);
    cy.get('[data-qa="cvc"]').should('be.visible').and("have.value", '').and("have.attr", "placeholder", "ex. 311").type(testData.cvv);
    cy.get('[data-qa="expiry-month"]').should('be.visible').and("have.value", '').and("have.attr", "placeholder", "MM").type(testData.shortMonth);
    cy.get('[data-qa="expiry-year"]').should('be.visible').and("have.value", '').and("have.attr", "placeholder", "YYYY").type(testData.creditYr);
    cy.get('[data-qa="pay-button"]').should('be.visible').invoke('text').should('eq', "Pay and Confirm Order");
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="name-on-card"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified Name field in Payment Page left blank displayed an error message");
    });
  });


  it("Verify Card Number field in Payment Page left blank displays an error message", () => {
    cy.get('[data-qa="name-on-card"]').type(testData.signUpName);
    cy.get('[data-qa="card-number"]').click().clear().should('be.empty');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="card-number"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified Card Number field in Payment Page left blank displayed an error message");
    });
  });


  it("Verify CVC Number field in Payment Page left blank displays an error message", () => {
    cy.get('[data-qa="card-number"]').type(testData.cardNumber);
    cy.get('[data-qa="cvc"]').click().clear().should('be.empty');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="cvc"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified CVC Number field in Payment Page left blank displayed an error message");
    });
  });


  it("Verify Expiration Month field in Payment Page left blank displays an error message", () => {
    cy.get('[data-qa="cvc"]').should('be.visible').and("have.value", '').and("have.attr", "placeholder", "ex. 311").type(testData.cvv);
    cy.get('[data-qa="expiry-month"]').click().clear().should('be.empty');
    cy.get('[data-qa="pay-button"]').should('be.visible').invoke('text').should('eq', "Pay and Confirm Order");
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="expiry-month"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified Expiration Month field in Payment Page left blank displayed an error message");
    });
  });


  it("Verify Expiration Year field in Payment Page left blank displays an error message", () => {
    cy.get('[data-qa="expiry-year"]').click().clear().should('be.empty');
    cy.get('[data-qa="expiry-month"]').should('be.visible').and("have.value", '').and("have.attr", "placeholder", "MM").type(testData.shortMonth);
    cy.get('[data-qa="pay-button"]').should('be.visible').invoke('text').should('eq', "Pay and Confirm Order");
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="expiry-year"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      cy.log($input[0].validationMessage); 
    cy.captureSnapshot("Automation Exercise/Verified Expiration Year field in Payment Page left blank displayed an error message");
    });
  });
});
