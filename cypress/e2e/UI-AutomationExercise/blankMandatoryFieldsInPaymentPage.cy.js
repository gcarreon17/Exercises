///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';
import { productNames, productPrices, productImageUrls } from '../../support/utils/automationExerciseProductsUtils';

describe("Blank Mandatory Fields in Payment Page", { testIsolation: false }, () => {

    let testData;
    let productsData;

  before(() => {
      testData = automationExerciseTestData();
      productsData = {
        names: productNames, prices: productPrices, images: productImageUrls
      };
      cy.clearAllCookies();
      cy.LaunchWebsite();
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
      cy.get('[data-qa="name-on-card"]').should('be.visible').and('be.empty');
      cy.get('[data-qa="card-number"]').should('be.visible').and('be.empty');
      cy.get('[data-qa="cvc"]').should('be.visible').and('be.empty');
      cy.get('[data-qa="expiry-month"]').should('be.visible').and('be.empty');
      cy.get('[data-qa="expiry-year"]').should('be.visible').and('be.empty');
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
      cy.captureSnapshot("Automation Exercise UI/Verified ALL mandatory fields in Payment Page left blank displayed an error message");
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
      cy.captureSnapshot("Automation Exercise UI/Verified Name field in Payment Page left blank displayed an error message");
      });
    });


    it("Verify Card Number field in Payment Page left blank displays an error message", () => {
      cy.get('[data-qa="name-on-card"]').type(testData.signUpName);
      cy.get('[data-qa="card-number"]').click().clear().should('be.empty');
      cy.get('[data-qa="pay-button"]').click();
      cy.get('[data-qa="card-number"]').then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        cy.log($input[0].validationMessage); 
      cy.captureSnapshot("Automation Exercise UI/Verified Card Number field in Payment Page left blank displayed an error message");
      });
    });


    it("Verify CVC Number field in Payment Page left blank displays an error message", () => {
      cy.get('[data-qa="card-number"]').type(testData.cardNumber);
      cy.get('[data-qa="cvc"]').click().clear().should('be.empty');
      cy.get('[data-qa="pay-button"]').click();
      cy.get('[data-qa="cvc"]').then(($input) => {
        expect($input[0].checkValidity()).to.be.false;
        cy.log($input[0].validationMessage); 
      cy.captureSnapshot("Automation Exercise UI/Verified CVC Number field in Payment Page left blank displayed an error message");
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
      cy.captureSnapshot("Automation Exercise UI/Verified Expiration Month field in Payment Page left blank displayed an error message");
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
      cy.captureSnapshot("Automation Exercise UI/Verified Expiration Year field in Payment Page left blank displayed an error message");
      });
    });
});