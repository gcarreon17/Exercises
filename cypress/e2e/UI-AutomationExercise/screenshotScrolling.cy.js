///<reference types="cypress" />

import { productNames, productPrices, productImageUrls } from '../../support/utils/automationExerciseProductsUtils';

describe('Scroll and take screenshots', {testIsolation: true}, () => {
  let productsData;

  before(() => {
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