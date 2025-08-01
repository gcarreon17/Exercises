///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils';
import { productNames, productPrices, productImageUrls } from '../../support/utils/automationExerciseProductsUtils';


describe("AddToCart", { testIsolation: false }, () => {

  let testData;
  let productsData;

  before(() => {
    testData = automationExerciseTestData();
    productsData = {
      names: productNames, prices: productPrices, images: productImageUrls
    };
    cy.clearAllCookies();
  });


  it("Verify Home Page displays", () => {
    cy.LaunchWebsite();
  });

  it("Verify Product Listing displays", () => {
    cy.get(".features_items").should("be.visible")
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "All Products");
     cy.captureSnapshot("Automation Exercise UI/Product Listing");
  });

  it("Verify product names and images display", () => {
    const productNames = [
      "Blue Top", "Men Tshirt", "Sleeveless Dress", "Stylish Dress",
      "Winter Top", "Summer White Top", "Madame Top For Women",
      "Fancy Green Top", "Sleeves Printed Top - White",
      "Half Sleeves Top Schiffli Detailing - Pink",
      "Frozen Tops For Kids", "Full Sleeves Top Cherry - Pink",
      "Printed Off Shoulder Top - White", "Sleeves Top and Short - Blue & Pink",
      "Little Girls Mr. Panda Shirt", "Sleeveless Unicorn Patch Gown - Pink",
      "Cotton Mull Embroidered Dress", "Blue Cotton Indie Mickey Dress",
      "Long Maxi Tulle Fancy Dress Up Outfits -Pink",
      "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi",
      "Colour Blocked Shirt – Sky Blue", "Pure Cotton V-Neck T-Shirt",
      "Green Side Placket Detail T-Shirt", "Premium Polo T-Shirts",
      "Pure Cotton Neon Green Tshirt", "Soft Stretch Jeans",
      "Regular Fit Straight Jeans", "Grunt Blue Slim Fit Jeans",
      "Rose Pink Embroidered Maxi Dress", "Cotton Silk Hand Block Print Saree",
      "Rust Red Linen Saree", "Beautiful Peacock Blue Cotton Linen Saree",
      "Lace Top For Women", "GRAPHIC DESIGN MEN T SHIRT - BLUE"
    ];

    cy.get('.features_items .product-image-wrapper').should('have.length', productNames.length)
      .each(($wrapper, index) => {
        cy.wrap($wrapper)
          .find('.productinfo > p')
          .should('be.visible')
          .invoke('text')
          .should('eq', productNames[index]);

        cy.wrap($wrapper)
          .find('.productinfo > img')
          .should('be.visible')
          .and(($img) => {
            const src = $img.attr('src');
            expect(src, `Image src should not be empty for product ${productNames[index]}`).to.be.a('string').and.not.be.empty;
          });
      });
  });

  it("Verify adding to cart is successful", () => {
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .then(($products) => {
        const randomIndex = Math.floor(Math.random() * $products.length);
        cy.wrap($products[randomIndex]).within(() => {
          cy.get('a[href*="/product_details/"]').invoke('removeAttr', 'target').click();
        });
        cy.get('.product-information').should('be.visible');
        cy.contains('Add to cart').click();
        cy.get('#cartModal').should('be.visible').contains('Continue Shopping').click();
        cy.captureSnapshot("Automation Exercise UI/Successful adding to cart");
      });
  });

  it("Verify successful review of a product", () => {
    cy.get(".active > a")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Write Your Review");
    cy.get("#name")
      .should("be.visible")
      .and('have.attr', "placeholder", "Your Name")
      .type("Test");
    cy.get("#email")
      .should("be.visible")
      .and('have.attr', "placeholder", "Email Address")
      .type("test@test.com");
    cy.get("#review")
      .should("be.visible")
      .and('have.attr', "placeholder", "Add Review Here!")
      .type("Testing");
    cy.get('#button-review').should('be.visible').click();
    cy.get('span').invoke('text').should('include', 'Thank you for your review.');
    cy.captureSnapshot("Automation Exercise UI/Successful review");
  });
});