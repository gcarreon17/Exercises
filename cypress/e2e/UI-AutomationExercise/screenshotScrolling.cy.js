///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';
import { productNames, productPrices, productImageUrls } from '../../support/utils/automationExerciseProductsUtils';

describe('Scroll and take screenshots', {testIsolation: true}, () => {
  let testData;
  let productsData;

  before(() => {
    testData = automationExerciseTestData();
    productsData = {
      names: productNames, prices: productPrices, images: productImageUrls
    };
    cy.clearAllCookies();
  });
  
    it('Takes screenshots while scrolling the products page', () => {
      cy.visit('https://www.automationexercise.com/products');
      cy.scrollAndScreenshot(productsData); 
    });
  });