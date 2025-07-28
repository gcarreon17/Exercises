///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';
import { productNames, productPrices, productImageUrls } from '../../support/utils/automationExerciseProductsUtils';


describe("AddToCart, Register, Delete User", { testIsolation: false }, () => {

  let testData;
  let productsData;

  before(() => {
    testData = automationExerciseTestData();
    productsData = {
      names: productNames, prices: productPrices, images: productImageUrls
    };
    cy.clearAllCookies();
  });


  it('Verify Home Page displays', () => {
    cy.LaunchWebsite();
  });

it("Verify product name, price, and image match correctly", () => {
    cy.ProductList(productsData);
  });



 it('Verify adding to cart is successful', () => {
    cy.AddtoCart();
 });


 it('Verify successful review of a product', () => {
    cy.ReviewProduct(testData);
 });


 it('Verify product exists in cart with correct qty, name, price, and image', () => {
    cy.CheckCartDetails(productsData);
  });
  

  it('Verify assertion and Fill up of SignUp Form is correct', () => {
    cy.SignUpLogin(testData)
  });


  it("Verify assertion and Fill up Registration Page is correct", () => {
    cy.Registration(testData)
  });


  it("Verify successful registration of user account", () => {
    cy.SuccessfulRegistration(testData);
  });
  

 
 it("Verify Login as Name is correct", () => {
    cy.LoginAsName(testData);
 });


it("Verify successful deletion of user account", () => {
  cy.DeleteUser(testData);
});


  it("Verify successful redirection to Homepage when continue button is clicked", () => {
    cy.url().should('eq', "https://www.automationexercise.com/");
  })
});